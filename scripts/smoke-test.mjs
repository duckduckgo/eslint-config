import { ESLint } from 'eslint';
import config from '../index.js';

if (!Array.isArray(config) || config.length === 0) {
    console.error('Config did not export a non-empty flat-config array.');
    process.exit(1);
}

const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: config,
});

const results = await eslint.lintFiles(['index.js']);
const errorCount = results.reduce((sum, r) => sum + r.errorCount, 0);
const warningCount = results.reduce((sum, r) => sum + r.warningCount, 0);

if (errorCount > 0) {
    const formatter = await eslint.loadFormatter('stylish');
    console.error(formatter.format(results));
    process.exit(1);
}

console.log(
    `OK — config loaded (${config.length} entries), linted ${results.length} file(s), ` +
    `${errorCount} error(s), ${warningCount} warning(s).`,
);
