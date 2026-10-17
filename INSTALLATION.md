# Install Corion

**3.24 — Shield Startup Fix · Windows x64**

[Download installer](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/Corion-3.24.0-win-x64-setup.exe) · [Release notes](https://github.com/hithaixo-max/Corion-Browser/releases/tag/v3.24.0) · [Troubleshooting](TROUBLESHOOTING.md)

## Requirements

| Item | Requirement |
| --- | --- |
| Operating system | Windows 10 build 19041 or later / Windows 11, native x64 |
| Architecture | 64-bit Intel / AMD Windows. A 32-bit or native ARM64 package is not provided. |
| Application runtime | .NET 8 Desktop Runtime and its matching .NET Core runtime, x64 |
| Native runtime | Microsoft Visual C++ v14 x64 runtime; setup checks the required compatible version |
| Network | Needed for browsing and for setup to download any missing Microsoft prerequisites |
| Permissions | The browser installs for the current Windows account. Missing Microsoft runtime installers may request administrator approval. |

Setup checks for compatible runtimes, downloads missing prerequisites from Microsoft, and verifies those prerequisite installers before running them. An installed .NET 9 runtime alone does not replace the .NET 8 requirement. Corion's installer bundles the browser engine; the separate troubleshooter ZIP is optional.

This is an early preview. Website compatibility, extensions, media playback and Windows integration are still being improved. Keep another working browser available for sites that need it.

## Download and verify

Official assets for this version are under [release v3.24.0](https://github.com/hithaixo-max/Corion-Browser/releases/tag/v3.24.0):

| File | Purpose |
| --- | --- |
| [Corion-3.24.0-win-x64-setup.exe](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/Corion-3.24.0-win-x64-setup.exe) | Browser installer |
| [Corion-3.24.0-win-x64-setup.exe.sha256](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/Corion-3.24.0-win-x64-setup.exe.sha256) | Expected installer SHA-256 |
| [Corion-3.24.0-troubleshooter.zip](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/Corion-3.24.0-troubleshooter.zip) | Separate diagnostic toolkit |
| [SHA256SUMS.txt](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.24.0/SHA256SUMS.txt) | Checksums for release assets |

To check the downloaded installer, open PowerShell in the download folder and run:

```powershell
Get-FileHash -LiteralPath '.\Corion-3.24.0-win-x64-setup.exe' -Algorithm SHA256
```

Compare the complete `Hash` value with the published `.sha256` file. If it differs, stop and download the file again from the official release. A matching checksum confirms that the file matches the published download; it is not a publisher code signature. No verified-publisher or stable-release claim is made for this preview. If Windows shows a security or publisher warning, review the file and its source before deciding whether to proceed; do not disable Windows protection globally.

## First installation

1. Close Corion if another copy is running. Setup does not force-close the browser.
2. Run the setup EXE, review the install location, and choose the offered desktop and Start menu shortcuts.
3. Allow setup to handle any missing Microsoft prerequisites. Cancelling a prerequisite stops setup before application payload changes.
4. Finish the wizard. If a runtime installer requests a restart, restart Windows before opening Corion.
5. Open Corion from the installed shortcut. Check **Settings → About** for **3.24 — Shield Startup Fix**.

The default application directory is `%LOCALAPPDATA%\Programs\Corion`. Corion's personal data lives separately under `%LOCALAPPDATA%\Corion`. Do not store your own files in the application directory or edit its installation metadata.

## Upgrade

Download the newer official setup, close **all** Corion windows, and run it for the same Windows account. The installer replaces its owned application files and keeps profiles, extensions and settings. A file-lock error means something is still using the installation; close it and try again.

Corion builds share profile data. Close a development or older installed build before opening another build directory. Use the installed shortcut after an upgrade. Pins pointing to another build may still open that older copy; check the version in About and pin the installed application if needed.

The website provides manual release downloads. Do not assume a download-and-restart automatic updater is configured. Appearance preset exports contain appearance settings; they are not full backups of browsing data. Before a preview upgrade, close Corion and keep a private backup of `%LOCALAPPDATA%\Corion` if you need to preserve an important profile. Treat that backup as sensitive account data, and never attach it to a public issue.

## Uninstall

Use **Windows Settings → Apps → Installed apps → Corion → Uninstall**, or the Corion uninstall entry supplied by setup. Close Corion first.

Uninstall removes owned application files, registration and matching application shortcuts. It **keeps browsing data, saved sign-ins and settings** under `%LOCALAPPDATA%\Corion`, along with user-created files it does not own. Shared Microsoft runtimes remain installed. Removing Corion does not delete data stored by websites in their own accounts.

To erase the retained local profile, first back up anything you need and close every Corion process. You can then delete `%LOCALAPPDATA%\Corion` yourself. This permanently removes the local Corion data for that Windows account, including saved sessions and sign-ins. Corion does not recover a profile that you delete.

## When setup cannot finish

- **File in use:** close every Corion window and any process launched from that installation, then retry.
- **Missing runtime / cancelled elevation:** rerun setup and read its error. Installing shared Microsoft runtimes may need administrator approval.
- **Network error:** reconnect and rerun setup; missing prerequisites need a successful verified download.
- **Unrelated nonempty destination:** keep your personal files outside the installation directory. Setup rejects folders it cannot identify as its own installation.
- **Uninstall failed:** close processes using the folder, check its permissions, and rerun uninstall. Keep the remaining installation metadata so recovery can work.

For further help, use the [troubleshooter and reporting guide](TROUBLESHOOTING.md). Include the error text with account names and private paths redacted.
