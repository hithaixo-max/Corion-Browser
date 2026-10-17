# Troubleshooting Corion

## Public build and Shield startup

The downloadable public installer is **3.24 - Shield Startup Fix**. It corrects
the initial-document page-filter setup that could be missed in 3.23, and includes
refreshed bundled subscriptions. Live third-party ad blocking has not been verified
for the correction. Do not assume that the preview blocks every ad or tracker.

**Current release: 3.24 — Shield Startup Fix**

[Download troubleshooter / debugger](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/Corion-3.24.0-troubleshooter.zip) · [Release checksums](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/SHA256SUMS.txt) · [Report a bug](https://github.com/hithaixo-max/Corion-Browser/issues/new?template=bug_report.yml)

## Start with these checks

1. Check **Settings → About** and include the complete version in your report.
2. Close all Corion windows, then reopen the installed shortcut. An older development shortcut or taskbar pin may open a different build.
3. Check whether the problem affects one site or every site. Try the same address in another browser and note the difference.
4. If an extension is involved, temporarily disable that extension and retry. Corion's extension compatibility is incomplete.
5. For setup problems, read the [installation guide](INSTALLATION.md). Do not delete profiles or reset all data as a first troubleshooting step.

## Separate diagnostic toolkit

The release includes **Corion-3.24.0-troubleshooter.zip**, a user-facing diagnostic toolkit. It is separate from the browser installer and does not contain private browser source or developer debugging symbols.

1. Download the ZIP from the official release and compare its SHA-256 with `SHA256SUMS.txt`.
2. Extract every file into a normal local folder. Double-click **Start-Corion-Troubleshooter.cmd**.
3. Select **Check installation**. If needed, use **Choose Corion folder** to select the directory containing `Corion.exe`.
4. Read **Results** and **Report preview (JSON)**. Select **Save report** to create a new JSON file outside the application and profile folders.

The toolkit checks Windows architecture/version, required application-file metadata, and standard .NET 8 Desktop / Visual C++ x64 runtime locations. It uses Windows PowerShell and Windows Forms supplied by Windows; .NET 8 and administrator access are not required to run the tool. It does not install, repair, remove, stop processes or access the network. It is a user-facing diagnostic tool, not a breakpoint debugger, and a passed presence check does not verify every file's hash, signature or compatibility.

Reports contain check statuses, fixed file names, numeric versions, architecture and a creation timestamp. They exclude account and computer names, full paths, browsing history, credentials, profile contents and raw logs. Reports never upload automatically. Review the JSON before choosing to share it, and attach only the relevant report to your issue. The ZIP's README includes command-line usage and the diagnostic limitations.

## Common problems

| Symptom | What to check |
| --- | --- |
| Setup cannot replace files | Close every Corion process using the installation. Setup does not force-close applications. Retry after the files are released. |
| Missing .NET / native runtime | Run the official installer so it can check and handle .NET 8 Desktop and Visual C++ x64 prerequisites. .NET 9 alone does not replace .NET 8. A missing runtime download needs internet access. |
| The wrong version opens | Open the installed Start menu or desktop shortcut. Check About. Repin the installed app if a taskbar pin points at an old build. |
| A normal site signs out | Confirm you opened the intended normal profile. Sites can expire sessions. Private tabs do not load your normal-profile saved credentials. |
| A private tab does not offer my saved login | This is intentional isolation. Open the correct normal profile or sign in separately within that private session. |
| A page behaves differently with Shield | Check its per-site Hunting / Relaxing state. Change one setting at a time and record whether it changes the problem. |
| An extension does not work | Corion does not guarantee full Chrome-extension compatibility. Report the extension name/version and the failed action without sharing tokens. |
| An imported appearance is missing media | A preset exports appearance settings, not a full profile or every local file. Relink unavailable artwork or reset that appearance item in Mods. |
| A reminder did not alert while Corion was closed | Alerts run while Corion is open; missed reminders are checked when you return. |
| Windows taskbar items are missing | The Jump List has a known unresolved bug. Use Corion's own tabs and menus in the meantime. |

## Spotify, codecs and protected content

Full Spotify web playback is currently unavailable inside the shipped CEF engine. The required licensed media codecs and DRM are not part of that engine. This is a known compatibility limit; changing Shield or repeatedly clearing data does not add those components.

Use the explicit **Microsoft Edge** action in Settings for that service. Edge has its own cookies and account session, so a Corion sign-in does not carry across. Other services with codec or protected-content requirements may also fail. Do not assume every video format, protected stream or Chrome extension works in this preview.

## Floating video

Floating windows work with supported media. Some protected or inaccessible players cannot be captured. Available next-video controls depend on the source player.

The original media continues to decode and provide audio. Supported capture can show a black placeholder over the original picture; closing the floating window restores it. Capture paths that depend on the visible source keep it visible. Hiding that picture does not remove the media decoding cost.

For a blank or incorrect floating picture, include the site, whether it happens in another tab, and the exact steps to open the pop-out. Try leaving the source tab available. Do not upload private or paid content as evidence.

## Write a useful issue

Include:

- Corion version from About, Windows version and whether this was a fresh installation or upgrade.
- A short sequence of steps starting from a known state.
- The expected result and what actually happened, including exact error text.
- Whether another browser or another Corion profile shows the same issue.
- A cropped screenshot, short recording or reviewed diagnostic JSON when useful.

GitHub issues and attachments are public. Never attach passwords, recovery codes, cookies, tokens, raw account databases or your complete `%LOCALAPPDATA%\Corion` folder. Crop account names, private pages and personal paths from screenshots. There is no dedicated confidential security reporting channel configured here; do not disclose sensitive exploit details in a public issue.

[Report a bug](https://github.com/hithaixo-max/Corion-Browser/issues/new?template=bug_report.yml) · [Suggest a feature](https://github.com/hithaixo-max/Corion-Browser/issues/new?template=feature_request.yml) · [Privacy notes](PRIVACY.md)
