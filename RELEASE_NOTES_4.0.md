# Corion 4.0 — Finishing Touches

Corion 4.0 is an early Windows x64 release focused on a smoother interface, automatic resource management and everyday browser tools.

- Restore the selected tab immediately and leave other restored tabs dormant until opened.
- Sleep eligible idle tabs by default on new profiles, with conservative protection for media, calls, downloads and forms. Existing preferences are preserved.
- Open tools with Ctrl+K and search the local library with Ctrl+Shift+L.
- Organize workspaces, save text for offline reading, use setup and selective local backup/recovery tools.
- Inspect browser health and current-site storage; use the refreshed interface and accessibility improvements.
- Upgrade to .NET 10 and CefSharp 156 / Chromium 156.0.8078.80; reduce startup work and bound icon loading and caches.

## Install

Download Corion-4.0.0-win-x64-setup.exe and compare its SHA-256 with the accompanying checksum file. Windows 10/11 x64 is the target. Setup installs per user and can download missing Microsoft .NET 10 Desktop Runtime and Visual C++ prerequisites. Internet access is needed for those prerequisites. Close Corion before upgrading and back up important profile data.

The installer is unsigned and Windows may display a reputation warning. Confirm the GitHub source and checksum before deciding whether to run it. Automatic update delivery is not configured in this release; future updates must be downloaded manually. Remote crash/usage reporting is not deployed.

## Verification and limits

The native browser suite passed 176 assertions during release preparation, including tab restoration and conservative sleep protections. Installer transaction tests cover cancellation rollback, locked files, path/link rejection and preservation of user files. These checks do not establish compatibility with every Windows machine or website. DRM, extension compatibility and some taskbar integrations remain limited. No universal speed or memory reduction percentage is claimed.

This is an early release. Privacy and rights information describes actual behavior; it does not guarantee anonymity, universal blocking or worldwide legal compliance. Final publisher details and legal review remain outstanding. Search, translation and visited websites involve their respective providers. The website is hosted on GitHub Pages without a Corion analytics script.

The public repository contains the website, documentation and release assets. Browser source remains private; existing licensing and third-party notices are retained. Older release assets remain available.
