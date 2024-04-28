import path from 'path';
import fs from 'fs-extra'
import solc from 'solc';

fs.removeSync('build');
const source = fs.readFileSync('C:\\Users\\hp\\OneDrive\\Desktop\\Innohacks3.0\\Innohacks3.0_Authentication-system-for-genuine-goods\\src\\ethereum\\contract\\FakeProdIden.sol', 'utf-8');

const input = {
    language: 'Solidity',
    sources: {
        'FakeProdIden.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync('build');
for(let contract in output.contracts['FakeProdIden.sol'])
{
    fs.outputJSONSync(
        path.resolve('build', contract.replace(':', '') + '.json'),
        output.contracts['FakeProdIden.sol'][contract]
    );
}