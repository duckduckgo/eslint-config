import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const run = (command, args, options = {}) =>
    execFileSync(command, args, {
        stdio: 'inherit',
        ...options,
    });

const output = (command, args) =>
    execFileSync(command, args, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'inherit'],
    }).trim();

const releaseType = output('npx', ['auto', 'version']);

if (!releaseType) {
    console.log('No release needed.');
    process.exit(0);
}

run('npx', ['auto', 'changelog']);
run('npm', ['version', releaseType, '--no-git-tag-version']);

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const tag = `v${version}`;
const branch = process.env.GITHUB_REF_NAME || output('git', ['branch', '--show-current']);

run('git', ['add', 'CHANGELOG.md', 'package.json', 'package-lock.json']);
run('git', ['commit', '-m', `Bump version to: ${tag} [skip ci]`]);
run('git', ['tag', tag]);
run('git', ['push', '--atomic', '--follow-tags', '--set-upstream', 'origin', branch]);
run('npx', ['auto', 'release']);
