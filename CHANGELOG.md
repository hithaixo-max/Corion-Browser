# Corion changelog

This public changelog summarizes delivered product milestones. It is not a claim that every website or workflow has been verified. The browser remains in early development.

## 3.23 — Public Preview

- Public Windows x64 installer and a separate user-facing troubleshooter / debugger download.
- Rebuilt public product page with actual browser screenshots, a product trailer and direct release links.
- Expanded installation, privacy, keyboard, troubleshooting and press documentation.
- Clear known limits for Spotify / protected media, extension compatibility, private sessions and Windows Jump Lists.

This milestone packages the current browser workspace for a public preview. It does not claim full Spotify playback, complete extension compatibility, a verified publisher signature or stable-release status.

[Release v3.23.0](https://github.com/hithaixo-max/Corion-Browser/releases/tag/v3.23.0) · [Windows installer](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.23.0/Corion-3.23.0-win-x64-setup.exe) · [Troubleshooter](https://github.com/hithaixo-max/Corion-Browser/releases/download/v3.23.0/Corion-3.23.0-troubleshooter.zip)

## 3.22 — Focused Video

- Floating video fills its window, with compact overlay controls and vector icons.
- Fullscreen can hide the controls; Escape / F11 restores the floating window.
- Supported YouTube capture can show a black source placeholder while the original media supplies the floating view. Closing restores the source picture.
- Capture paths that require a visible source keep it visible. The original stream still needs decoding.

## 3.21 — Settings Cleanup & Playback

- A single live Corion Mods editor for homepage controls, appearance presets, download-ring color and sidebar reset.
- Appearance-only JSON import/export and named presets remain available.
- One music-widget visibility control, with preserved existing preferences and transactional Save / Cancel.
- Advanced search endpoint and website permissions under Shield / Privacy.
- Spotify control handling survives replacement audio elements. Full Spotify playback still needs codecs / DRM absent from the shipped CEF engine; Settings provides a Microsoft Edge action with its own account session.

## 3.20 — Everyday Canvas

- Retained native tab viewports and unscaled previews for loaded-tab switching.
- Analog watch / wall clocks, picture / GIF faces and portable clock designs in Mods.
- Native reminders / to-dos and a standard / scientific calculator.
- Independent homepage text, search and status placement, sizing and styling, alongside native shell appearance controls.
- Prefetched GIF frames and primed video looping; inactive pages retain their displayed frame.

## 3.10 — Flow & Freedom

- Folder placement and a movable, resizable music-widget preview in Corion Mods, with Save / Cancel.
- A distinct private-login notice, a smaller private logo and optional version beside the tab dropdown.
- Local changelog and one-time update announcement.
- Multiple independent source-video pop-outs with playback and volume controls, using the original playback source.
- Favicon tab chooser, direct website suggestions and deliberate safe data clearing.

Earlier browser development predates this public preview. Private implementation records and source history are not published in this product repository.

[Overview](README.md) · [Known limits and troubleshooting](TROUBLESHOOTING.md)
