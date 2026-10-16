<p align="center"><img src="assets/corion-logo.png" width="150" alt="Corion logo"></p>

# Corion Browser

## Your Privacy is our main concern

**A personal Windows browser by Coritex Studio, built for studying, creating and everyday browsing.**

[Visit the Corion website](https://hithaixo-max.github.io/Corion-Browser/) | [Explore the features](#what-you-can-do-with-corion) | [Share feedback](https://github.com/hithaixo-max/Corion-Browser/issues)

Corion is an independent browser project with a dark, cave-inspired identity and a workspace you can make your own. It combines familiar browser controls with a flexible homepage, tools for research and study, and visible controls for privacy. It is an early build: features and compatibility are still being improved, and bugs are expected.

This public repository is Corion's product information and feedback space. It contains the website and documentation, not the browser's private source repository or anyone's browsing data.

## Why we made Corion

We wanted a browser that feels like a personal workspace. Studying often means keeping a lesson beside notes, returning to several sources, collecting useful links and remembering a task without losing your place. Everyday browsing should make those activities easier.

We also wanted customization to go beyond choosing a color. Your homepage, clock, shortcuts, music and toolbar should fit the way you use your computer. Corion's historical cave imagery and original logo give it a recognizable character without relying on bright, distracting decoration.

Privacy belongs in that workspace too. The slogan is our design priority: make privacy controls understandable, keep personal spaces separate and be honest about how features work. It is not a promise of anonymity or perfect protection. Corion is still in development, and security, compatibility and reliability require continued work.

## What you can do with Corion

### Browse and organize

- Use a familiar address bar, website suggestions, bookmarks and browsing history.
- Choose Brave Search, DuckDuckGo, Google or a custom HTTPS search provider.
- Keep normal website sign-ins between restarts; use separate profiles for different accounts and activities.
- Pin tabs, use optional vertical tabs, organize shortcuts into folders and work with split view.
- Move tabs between Corion windows and preview loaded tabs before selecting them.

### Build your own homepage with Corion Mods

- Move and resize homepage elements in a live editor, then Save or Cancel the design.
- Customize clocks, homepage layout, colors, toolbar icons and tab artwork.
- Choose images, GIFs and supported local video backgrounds, plus optional ambient audio.
- Give individual shortcuts their own artwork, including supported animated covers, and arrange folders on the homepage or sidebar.
- Keep named appearance presets and import or export their appearance settings.

### Keep useful tools close

- Use native reminders and a standard/scientific calculator.
- Save study sessions, add page-linked notes and review research sources.
- Manage downloads, use website side panels and inspect page permissions.
- Watch supported video in resizable floating windows while using other tabs. The focused video view hides controls in fullscreen; Escape brings them back.

### Control your browsing space

- Corion Shield provides request blocking and per-site controls, with clear Hunting / Relaxing states.
- Private tabs use isolated temporary browsing sessions and a distinct private homepage. Saved normal-profile logins do not load into that private session.
- Manage website permissions, saved logins and history through Settings. A history passcode protects the full Settings history view; address-bar recent suggestions remain available by design.
- Profile preferences, local artwork and personal libraries are stored on your Windows computer. Optional online features still contact their providers.

## Privacy, in plain language

Private browsing does not hide you from websites, your network, an employer or an internet provider. Ad blocking cannot guarantee that every ad or tracker is blocked. Websites still receive the requests you make to them.

Searches go to your selected search provider. Online autocomplete can send typed search text to that provider when enabled; it is disabled in private tabs. Optional music recognition sends a microphone sample to its recognition provider after you choose that feature and grant permission. Extensions and the sites you visit have their own behavior and privacy policies.

Our product page has no Corion analytics script, advertising pixel, external font or sign-up form. GitHub hosts this repository and its Pages website and may process access information under its own privacy policy. See [Privacy and data notes](PRIVACY.md).

## Current development build: 3.22 - Focused Video

The floating player now gives its picture the full window, uses compact overlay controls and offers fullscreen with hidden controls. Supported YouTube capture shows a black placeholder on the source page while the original media supplies the pop-out. Closing it restores the original picture.

That original media must keep decoding for playback. Hiding the source picture does not eliminate decoding cost. Sites that require compositor-only capture keep the source visible so the floating picture is not blanked.

## Availability and known limits

Corion currently targets Windows desktop (x64). This is an early development browser, not a finished stable release. **No public installer is published in this repository yet.** Official public downloads will be listed here when available; there is no download-and-restart updater on this page.

- Media compatibility depends on the website, codecs and protected-content requirements. Full Spotify web playback is not currently supported inside the shipped engine; Corion provides an explicit Microsoft Edge fallback.
- Floating video is available only for supported media; protected content may not be capturable.
- Music recognition uses an unofficial community integration and may stop working when its service changes.
- Browser extensions have compatibility limits; this is not a promise that every Chrome extension works.
- Windows taskbar Jump Lists have a known unresolved issue. Reminder alerts require Corion to be running, with missed items checked when you return.
- Private browsing and local history controls are useful safeguards, not guarantees against a compromised device.

## Help shape Corion

Use [Issues](https://github.com/hithaixo-max/Corion-Browser/issues) to report a bug or suggest an improvement. Include the Corion version, your Windows version, steps to reproduce and what you expected to happen. A small recording or screenshot helps when it contains no private information.

Do not post passwords, cookies, recovery codes, account tokens or your complete browsing history. Crop screenshots and redact personal details before uploading. This repository does not currently provide a dedicated confidential security-reporting channel; do not disclose sensitive exploit details in a public issue.

## Ownership and credits

**Copyright (c) 2026 Coritex Studio. All rights reserved.**

Corion's original browser code, name, branding and original product-page content are proprietary. This repository does not grant an open-source license to Corion. Rights to view and fork this public repository under GitHub's Terms of Service are unaffected. See [LICENSE.txt](LICENSE.txt).

Corion uses third-party software and assets, including Chromium / CEF, CefSharp and components used by Corion Shield. Their existing licenses and notices continue to apply; Coritex Studio does not claim exclusive rights to them. Third-party names are used to describe compatibility and do not imply endorsement. The public page uses the original Corion logo and no third-party cave photographs.
