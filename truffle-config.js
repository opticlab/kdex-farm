const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateKey = "[BRING YOUR OWN KEY]";

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
     provider: new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),     // Localhost (default: none)
     network_id: "1001",       // Any network (default: none)
     gas: 25000000000,
     gasPrice: null,
    },
  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //}
  //
  compilers: {
    solc: {
      version: "^0.6.12",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1500
        },
        evmVersion: "constantinople"
      }
    }
  }
};
