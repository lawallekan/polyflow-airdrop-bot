function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log("========================================".cyan);
  console.log("=         PolyFlow Airdrop Bot         =".cyan);
  console.log("=     Created by Defi imam community     =".cyan);
  console.log("=    https://t.me/leksidedrops    =".cyan);
  console.log("========================================".cyan);
  console.log();
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { displayHeader, delay };
