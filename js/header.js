console.log("############################################");
console.log("#        Hi there technical person         #");
console.log("############################################");

const _NETWORK_ID = 369;
let _CONTRACT_DATA = {};

const _API_URL = 'https://scan.pulsechain.com/api'

_CONTRACT_DATA[_NETWORK_ID] = {
    network_name: "PulseChain",
    explorer_url: 'https://pulsechain.com/',
    STACKING: {
        sevenDays: {
            address: '0xCE7324C632CC8Ebd20ec05bd706b87C5d657bBa7',
        },
        tenDays: {
            address: '0x06aAB5aeDf01DA781707e1ec3770d1ebca7F9aF7'
        },
        thirtyTwoDays: {
            address: '0x06aAB5aeDf01DA781707e1ec3770d1ebca7F9aF7'
        },
        ninetyDays: {
            address: '0xCE7324C632CC8Ebd20ec05bd706b87C5d657bBa7'
        },
        abi: [{"type":"constructor","inputs":[{"type":"address","name":"stakingToken","internalType":"address"},{"type":"address","name":"rewardToken","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"earned","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"getRewards","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"paused","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"stake","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"event","name":"Paused","inputs":[{"type":"address","name":"account","indexed":false}],"anonymous":false},{"type":"event","name":"RewardsPaid","inputs":[{"type":"address","name":"stakeHolder","indexed":false},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"Staked","inputs":[{"type":"address","name":"stakeHolder","indexed":false},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"type":"address","name":"account","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"stakeHolder","indexed":false},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"error","name":"ZeroAddress","inputs":[]},{"type":"error","name":"ZeroAmount","inputs":[]}],
    },
    TOKEN: {
        symbol: 'DGN',
        address: '0x0b25d5B1b55Dc0689EE5Af82C5d06e6a683777C0',
        abi: [{"type":"constructor","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burnFrom","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"spender","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false}], },

/* countdown global */

let countDownGlobal;

/* wallet connection */

let web3;

let oContractToken;

let isMetamaskConnected;

let selectedAccount;

let web3Main = new Web3('https://rpc.pulsechain.com');

// Create an instance of Notyf
var notyf = new Notyf({
    duration: 3000,
    position: {x: 'right', y: 'bottom'}
});

// hide logs
console.log = () => {};
