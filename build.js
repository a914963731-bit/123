const { execSync } = require('child_process');
execSync('npm install', { stdio: 'inherit' });
execSync('npx next build', { stdio: 'inherit' });