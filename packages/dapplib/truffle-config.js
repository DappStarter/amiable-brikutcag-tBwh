require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note mean essay hidden produce boat section'; 
let testAccounts = [
"0x6da309acb24b0e30ed271d79dbdadcc44c5d21c7ca34eadada5367fb1f2e0136",
"0xbf8a73d8e235e5f973d8522dde12559da09177e615b6780e49a4cb7366ef6b93",
"0x9049ae399843c5d1c4f13194f79d283a08eb7b857ce1cfc182ebbf8766837612",
"0x29f4a6073551af3c42134ac23ff125c40fdefa2895d1f638852263ea072f603f",
"0x996593eae81ef427bc91f8b2f31f5bee9991843691254893e0f8ef952821fc5a",
"0xd8e832c069f11e5198deb72a3a048e67c5b47b8923b9b8a21c390d93457b4ebd",
"0x9d3482766c6c16b35730f2831bc94a1f79fa6ea00dc1b54de49d21602dd7e96e",
"0x5fb49913bc9aad0702b00162d13b8d779584f485e97ed83cfb0aa5ee337fcdda",
"0xd13bfb2634536763e41f6f06190196e901aaa58488c6c59bd1a8010ee305d054",
"0x089087c1c5e5dd187ff4eaee57652c857c4e7f422fc7fd8b3d747481ad506aff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


