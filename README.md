Welcome to the official GitHub repository for https://AllAboutBTC.com, an open-source website dedicated to providing information and resources about Bitcoin.

The website https://AllAboutBTC.com clones this repo every hour for updates.

**Purpose**
The purpose of this website is to educate individuals about Bitcoin and provide resources for those interested in investing, trading, using and/or building on Bitcoin. This website is open-source, meaning anyone can contribute to its development and maintenance.

**Guidelines**
As an open-source community, we value the following guidelines to ensure a safe, respectful, and legal environment for all users:

**Laws and Jurisdiction**
All contributors are expected to follow applicable laws and regulations regarding the use and dissemination of Bitcoin-related information. Contributors should also be aware of the jurisdiction they operate in and ensure that their contributions do not violate any local or international laws.

**Privacy**
We value the privacy of our users and encourage contributors to respect the privacy of others. Contributors should not share or collect personal information from users without their explicit consent.

**Safety**
We prioritize the safety of our users and expect all contributors to create a safe and inclusive environment. Contributors should not engage in any behavior that could be considered harassment, discrimination, or bullying.

**Respect**
We value diversity and inclusivity in our community and expect all contributors to respect one another regardless of race, gender, sexual orientation, or any other personal characteristic. Any disrespectful behavior will not be tolerated.

**Legal Content**
All content contributed to https://AllAboutBTC.com should be legal and free from any copyright infringement. Contributors should ensure that any content they contribute is original or properly attributed.

**Contributing**
We welcome contributions from the community and encourage anyone interested in contributing to review our Contribution Guidelines before submitting a pull request.

## Adding Your Project to the Active Projects Page

The Active Projects directory is at [/projects/index.html](https://anonymousbitcoinclub.github.io/collective-website/projects/index.html). It showcases Bitcoin-related projects in a simple, community-maintained list.

To add your project:

1. **Fork this repository**  
   https://github.com/AnonymousBitcoinClub/collective-website

2. **Create a new folder** inside the `/projects/` directory.  
   - Choose a short, URL-friendly slug (lowercase, hyphens instead of spaces, e.g. `my-bitcoin-tool`, `ordinal-art-series`).  
   - This becomes the subpath, like `/projects/my-bitcoin-tool/`.

3. **Add your project page as `index.html`** inside your new folder.  
   - This file contains the full content for your project: name, description, active since date, category, any images/banners/GIFs, links (website, repo, X, etc.), and whatever else you want displayed.  
   - Style it to match the existing look (simple HTML with headings, paragraphs, `<img>` tags for assets in the same folder, etc.).  
   - Example assets from existing projects: logos (`anon-logo-gif.gif`), banners (`anonymous-bitcoin-club-banner.png`), animations (`burn-gif.gif`). Reference them relatively, e.g. `<img src="my-logo.png" alt="Project Logo">`.  
   - Keep it clean and Bitcoin-themed—cypherpunk vibes encouraged!

4. **Update the main projects list** — Edit `/projects/index.html`.  
   - Add a new entry for your project in the same format/style as the existing ones (e.g. Anonymous Bitcoin Club, Bitcoin Worms).  
   - This typically means adding a block with: project name, active since, category (with data-type if used, like ordinal/counterparty/stamp), short description, and a link to your subfolder (e.g. `<a href="./my-bitcoin-tool/">View Project</a>` or embed/inline the content if that's how it's structured).  
   - Match the HTML pattern exactly from the current entries to keep the page consistent.

5. **Commit and open a Pull Request**.  
   - Title: "Add [Your Project Name] to Active Projects"  
   - Description: Briefly explain your project, why it's Bitcoin-relevant, and any notes (e.g. "Uses relative paths for images in /projects/my-bitcoin-tool/").  
   - Include screenshots if helpful.

Once merged, your project will appear on the Active Projects page (and propagate to clones like AllAboutBTC.com after their next hourly pull).

We welcome Bitcoin-native projects: tools, Ordinals/Counterparty/Rune/Stamp art & protocols, education, wallets, cypherpunk collectives, experiments, and more.

Questions or unsure about markup? Open an issue first—we're happy to help review drafts.

Thanks for building on Bitcoin with the collective!
