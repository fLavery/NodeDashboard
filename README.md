## Chainlink Node Dashboard Website
Stream Two Project: Interactive Frontend Development - Code Institute

This website was built for a person who is looking for a chainlink node to provide decentralized api data to smart contracts.

Deterministic smart contracts are at the forefront of the next Industrial revolution. The cost saving potential of tamperless self executing contracts will render them extremely disruptive to countless industries including banking, insurance and derivatives.
However a key weakness of smartcontracts is "what if you get faulty data into your smartcontract". Until very recently smartcontracts could only get data via a centralized Oracle provider such as Oracalize. With centralised acquisition of data a contract is vulnerable to downtime, as well as faulty or tampered data i.e. the "[Oracle problem](http://www.slaw.ca/2018/12/12/smart-contracts-and-the-oracle-problem)". This is a security risk that is too high to implement high value contracts.

However with the launch of the Chainlink network in June 2019 we are at a point where we are closer than ever to solving "The Oracle Problem". Chainlink will give smartcontracts creators access to secure, highly available and tamper proof api data via decentralized Oracles. One can pick and choose the most reliable Nodes to meet the security requirements that a specific contract requires. 

This website will allow smart contract creators to view various live logged performance metrics for a series of nodes which will be charted via D3.js & DC.js. The charts will be interactive and the user will be able to acquire the necessary information to make api data requests via this node.
 
## UX
These are the user stories I came up with for the website:

- As a user I want to be able to see how reliable and secure the node is, to ensure the successful execution of my smart contract.
 
- As a user I want to be able to see performance in detail in periods of high traffic volume.

- As a user I want to be able to find the Oracle address and the job ID so I can make requests to the node.

The primary goal of this site is to get smartcontract creators to request data from my node so that I will get payment in return for providing this data. I wanted potential customers to feel confidant they are choosing a node or nodes that will deliver their data succesfully and providing interactive live log data showing high uptime and request numbers will persuade them. Regarding aesthethics and branding, I named the nodes based on legendarily strong metals to inspire thoughts of unearthly robustness in the customer.  

## Features
A Single page website with 3 main sections.
- Responsive layout(ish)

Interactive Dashboard
- Charts are populated with data from each node on clicking the respective node icon
- Crossfilter allows users to select data ranges and dimensions which auto updates accross charts
- Animated menu

Modal Button
- Incorporated into the top nav
- Shows available jobs in a modal on click
- Features collapsable menus so the users can easily copy and paste from the section they intended.

Information Section
- Detailing relavant node information such as Cloud platform providers
 
### Features Left to Implement
- Charts to be linked to logs data from cloud platform instead of dummy data
- Contact Section
- Live LINK/USD charts
- More responsive DC.js charts

## Technologies Used

- This project uses HTML and CSS programming languages.
 
- [JQuery](https://jquery.com)
    - The website uses **JQuery** to make the Jobs Modal and selecting the node from the node menu.

- [AWSCloud9](https://aws.amazon.com/cloud9/)
    - This developer used**AWS Cloud9** for their IDE while building the website.

- [BootstrapCDN](https://www.bootstrapcdn.com/)
    - The website uses **Bootstrap4** to simplify the structure of the website and make the website responsive easily.

- [Google Fonts](https://fonts.google.com/)
    - The website uses **Google fonts** to style the website fonts.
  
- [Start Bootstrap SB Admin 2 Theme](https://startbootstrap.com/template-overviews/sb-admin-2/)
    - This website uses **SB Admin 2 theme** for it's base structure as well as it's dependencies which are listed [here](https://startbootstrap.com/template-overviews/sb-admin-2/)

- [Chainlink](https://chain.link/)
    - The website shows metrics for a node running on the **Chainlink network**.
    
- [Smartcontract.com](https://www.smartcontract.com/)
    - For further information on smartcontracts and how they work, check out **SmartContract.com**. 

- [CargoX](https://cargox.info/)
    - Design inspiration for dashboard from **CargoX**; a website for tracking key metrics on the Cargo X Blockchain network.

- [D3.js](https://d3js.org/)
    - This website uses the Javascript library **D3.js** for data SVG generation.

- [DC.js](https://dc-js.github.io/dc.js/)
    - This website uses the Javascript charting library **DC.js** for styling of DC SVGs.

- [Crossfilter](https://square.github.io/crossfilter/)
    - This website uses the Javascript library **Crossfilter** to enable interactivity between charts.
    
-[Rory McCrossan](https://stackoverflow.com/questions/37995581/how-to-replace-div-content-for-button-click-on-same-page-in-bootstrap)
  - Code for replacing the charts depending on which one you click was adapted from the example given by **Rory McCrossan** in the stack overflow thread.

## Testing
- I clicked all links and ensured they went to the right location, I tested the browser on Firefox & Brave(Chromium fork). 
- I tested the responsive layout using Braves inbuilt dev tools

Issues yet to be resolved

-DC.js charts are not resizing correctly for other size screens and zooms

-Only the Imperial Gold node features crossfilter interactive features

## Deployment

This website was deployed using Github pages and you can check it out [here](https://fionnlavery.github.io/NodeDashboard/)
Note: Only the imperial Gold nodes charts behave as intended.

## Credits

### Media
- The Chainlink logo was taken from the chain.link website
### Acknowledgements

- I received inspiration for this project from Sergey Nazarov and the Chainlink team
