require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net public gesture opera blue timber'; 
let testAccounts = [
"0xe135272633b2c497d43f42ce835352155ebd81816b05b3b80661a6cebdf192c4",
"0xe3d0625223bfd38d1dfbc8706d12bc3b0f6dc55d2813b63f57902b39c88b3922",
"0x7522371e4e350d225546ca8c947f73746a561ee08248c2481c26ef7fc31392df",
"0xe65908f3eab80b3d08b10ed5b478d526b78fb5135e9e55dce0697df1479b632c",
"0x758697cc5d3e76355f1781b8d863896d00cc7f27cbad19be3e71dbe35731229f",
"0xcad539a839f444e0de764cf639a310abc19b3d6ae9b7a01a3d7dac38fa1de848",
"0x533e3f8eb796ad3512ac4e4e7074305266697ce9ddc227ad5758dea0ce763329",
"0xf843d76d9051001db72ba7e33af4102577eba3dd576b30da1b1330b4b38be31f",
"0x935d87c09911f95a42c41ab34b03b7212b3ee142e482b3d7640e8591e4716fe2",
"0x63457e8f41811af9371882cfcb1e79c39c634f2e5bf307c60ddf38f3d48b8850"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

