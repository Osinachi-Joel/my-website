const { execSync } = require('child_process');
const os = require('os');

if (os.platform() === 'linux') {
  try {
    execSync('npm install @rollup/rollup-linux-x64-gnu @swc/core-linux-x64-gnu', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to install Linux-specific packages:', error);
    process.exit(1);
  }
}