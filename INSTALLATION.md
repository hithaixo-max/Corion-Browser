# Installing Corion 4.0

1. Download the [Windows x64 installer](https://github.com/hithaixo-max/Corion-Browser/releases/download/v4.0.0/Corion-4.0.0-win-x64-setup.exe).
2. Compare its SHA-256 with the [published checksum](https://github.com/hithaixo-max/Corion-Browser/releases/download/v4.0.0/Corion-4.0.0-win-x64-setup.exe.sha256), for example with PowerShell `Get-FileHash`.
3. Close Corion, back up important profile data, and run setup. The installer is unsigned; confirm the download source before accepting Windows prompts.

Targets Windows 10/11 x64. Setup is per user and may download missing Microsoft .NET 10 Desktop Runtime and Visual C++ prerequisites. Internet access is required for those downloads. Do not interrupt prerequisite installation.

Use Windows Installed apps to uninstall. Keep a separate backup of bookmarks and other important profile data. Future releases require manual download: automatic update delivery is not configured. The old 3.24 troubleshooting toolkit belongs to that historical release.
