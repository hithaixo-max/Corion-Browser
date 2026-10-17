# Privacy and data notes

**Your Privacy is our main concern** is Corion's design priority. This page describes the public product site and summarizes relevant browser behavior; it does not promise anonymity or replace the policies of visited websites and optional service providers.

## This repository and website

The static Corion product site contains local HTML, CSS, original branding and browser screenshots. It has no Corion analytics script, ad pixel, sign-up form, external fonts or microphone access. It does not connect to your installed Corion profile, read browser history or set Corion tracking cookies. There are no embedded third-party video players or social widgets.

The native trailer player uses a local screenshot as its poster and `preload="none"`. Playing it loads the MP4 from the public GitHub release and its release-asset service. Downloading the installer, diagnostic toolkit or trailer also contacts GitHub. The page does not automatically download or install application updates.

Social sharing metadata and a sitemap describe this public page. A public IndexNow
verification file permits notifying participating search engines when the landing
page changes. Such a submission contains the public URL and website verification
value, not visitor or browser usage data. It adds no analytics script, advertising
pixel or fingerprinting.

GitHub hosts the repository and GitHub Pages site. GitHub may process IP addresses and other access information under [GitHub's Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Following a link to another website subjects that visit to the other service's practices. Publishing a GitHub issue or attachment makes its contents public.

## The browser

Normal profiles keep separate accounts, browsing history, bookmarks and settings locally on the Windows computer. Normal website sign-ins can persist across restarts. Private tabs use isolated temporary browsing sessions; they do not make network requests anonymous. Saved normal-profile credentials do not load into private sessions.

The full Settings history view can be protected by its optional passcode. That lock does not hide recent address-bar suggestions, encrypt every browser record or protect a compromised Windows account. Local storage does not automatically mean every item is encrypted or immune to other software.

Queries go to the selected search provider. When online search suggestions are enabled, typed search text may be sent to that provider; private tabs disable online suggestions. Websites receive the network requests made to them. Extensions can have their own permissions and network behavior. Optional music recognition sends a microphone sample to its recognition service after permission and a user action. Its community integration is unofficial and may change.

Corion Shield and per-site permission controls provide safeguards, but neither guarantees that every ad, tracker, permission misuse or security issue is prevented. Corion 3.23 is a public preview and remains in early development.

## Installation and retained data

The browser installs under `%LOCALAPPDATA%\Programs\Corion` for the current Windows account. Profile data lives separately under `%LOCALAPPDATA%\Corion`, including the default `Shell` data directory and additional profile directories. Upgrading keeps profiles and settings. Uninstalling removes the application but retains browsing data and saved logins. See [Installation](INSTALLATION.md) before removing retained data or making a private backup.

## Optional diagnostic toolkit

The separately downloaded troubleshooter / debugger performs read-only diagnostics and can save a JSON report for your review. Reports contain fixed file names, check statuses, numeric versions, architecture and a creation timestamp. They exclude account and computer names, full paths, raw browser logs, profile contents, history and credentials. The tool does not upload reports or access the network. Review a report before choosing to post it. See [Troubleshooting](TROUBLESHOOTING.md).

## Reporting problems

Never upload passwords, cookies, tokens, recovery codes or raw account databases to a public issue. Redact screenshots and recordings. A confidential security reporting address is not configured in this repository, so do not post sensitive exploit details publicly.
