# Corion 4.10 — Bug Sweep

Corion 4.10 is a stability and polish update to the early Windows x64 release.

- Reader Mode, Save article and Translate no longer close the browser when a slow page times out or has not created its script context yet.
- Late failures of abandoned page and DevTools tasks are now handled instead of being reported as unobserved task errors.
- Undo for ten seconds after removing a Watch or deleting a saved page note; the original item returns to its place.
- Download rules > Test saved rules shows which rule a sample download would use and the exact file it would create, without creating anything.
- When several downloads finish together, the first keeps its notification and the rest are summarized in one notification that opens Downloads.
- The page-note filter waits briefly while you type; the Mods UI accent color picker has an accessible name.

## Install

Download Corion-4.10.0-win-x64-setup.exe and compare its SHA-256 with the accompanying checksum file. Windows 10/11 x64 is the target. Setup installs per user and can download missing Microsoft .NET 10 Desktop Runtime and Visual C++ prerequisites. Internet access is needed for those prerequisites. Close Corion before upgrading; existing profiles and settings are kept. Back up important profile data before installing development builds.

The installer is unsigned and Windows may display a reputation warning. Confirm the GitHub source and checksum before deciding whether to run it. Automatic update delivery is not configured; future updates must be downloaded manually. Remote crash/usage reporting is not deployed.

## Verification and limits

Every automated test project was rebuilt for .NET 10 and run for this release, including new checks for the fixes and features above. The installer passed isolated install, upgrade, cancellation and uninstall checks with a sandboxed registration, plus the installer transaction safety checks. These checks do not establish compatibility with every Windows machine or website.

The taskbar Jump List entries are registered correctly, but the visible menu still awaits a live check. DRM (for example full Spotify playback), extension compatibility and some taskbar integrations remain limited. No universal speed or memory reduction percentage is claimed.

This is an early release. Privacy and rights information describes actual behavior; it does not guarantee anonymity, universal blocking or worldwide legal compliance. Final publisher details and legal review remain outstanding. The public repository contains the website, documentation and release assets; browser source remains private. Older release assets remain available.
