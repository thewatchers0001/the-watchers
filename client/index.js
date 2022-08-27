import { h, render } from './libs/preact.js';
import htm from './libs/htm.js';

const html = htm.bind(h);

function App() {
  return html`
    <div class="container">
      <div class="row">
        <div class="col col-50">
          <p><img src="./media/logo-a1-fff.png" alt="The Watchers logo" width="110" height="51" /></p>
          <p>We are a community-driven collab committee for holders of Admit One NFTs by gmoney.</p>
          <p>Follow us on Twitter: <a href="https://twitter.com/thewatchers0001" title="The Watchers on Twitter">@TheWatchers0001</a></p>
          <p>Our multisig wallet is signed by all nine committee members and requires 5 of 9 signatures to complete on-chain transactions.</p>
          <p>We welcome NFT and ETH donations: <a href="https://www.prysm.xyz/the-watchers" title="The Watchers Prysm Squad">prysm.xyz/the-watchers</a></p>
          <p class="handwriting">With love,<br/>The Watchers</p>
        </div>
        <div class="col col-50 highlight-background"></div>
      </div>
    </div>
  `;
}

render(html`<${App} />`, document.getElementById('root'));