# Corion distribution notices

Corion includes software and photographs from the projects and authors below. Their own licenses apply to those components. Full license texts are provided in the accompanying `licenses` folder; this notice does not replace them.

## Corion code and branding

Original Corion branding and new original material first introduced in 3.23 and later carry the rights notice in `licenses/Corion.txt`. Legacy code previously supplied under the [Unlicense](https://unlicense.org/) retains its grant, preserved in `licenses/Legacy-Corion-Unlicense.txt`. Earlier permissions are not withdrawn. Photograph and third-party licenses remain separate and unchanged; this notice grants no additional permission to reuse the Corion brand.

## Browser engine and .NET bindings

| Component | Version | Copyright and license | Full text |
| --- | --- | --- | --- |
| [CefSharp](https://github.com/cefsharp/CefSharp/tree/cefsharp/156), including its WPF and subprocess components | 156.0.150 | The CefSharp Authors; BSD license with three conditions | `licenses/CefSharp.txt` |
| [Chromium Embedded Framework](https://github.com/chromiumembedded/cef), distributed through [cef-binary](https://github.com/cefsharp/cef-binary) | 156.0.15, Chromium 156.0.8078.80 | Copyright 2008–2020 Marshall A. Greenblatt; portions copyright 2006–2009 Google Inc.; BSD license with three conditions | `licenses/CEF.txt` |

Chromium and its bundled third party components have additional licenses. In Corion, enter **`about:credits`** in the address bar to open their included credits and license texts. CEF also provides **`about:license`**. These pages are described in the [official CEF distribution guidance](https://chromiumembedded.github.io/cef/general_usage.html).

## Article extraction (1.20 and later)

[Mozilla Readability](https://github.com/mozilla/readability), version 0.6.0,
is used unmodified for on-demand Reader Mode extraction. Copyright (c) 2010 Arc90
Inc, maintained by Mozilla and contributors; Apache License 2.0. Full license
and pinned-source integrity notes: `licenses/Readability/LICENSE.md` and
`licenses/Readability/NOTICE.md`. Corion's displayed Reader contains text nodes,
not the extractor's untrusted HTML output. Historical installers before 1.20
do not bundle this component.

## Corion 2.0 local sharing and Windows notifications

- QRCoder **1.8.0**, MIT: `licenses/QRCoder/LICENSE.txt` and
  `licenses/QRCoder/NOTICE.md`. QR generation runs locally.
- Microsoft.Toolkit.Uwp.Notifications **7.1.3**, .NET Foundation and
  Contributors, MIT: `licenses/WindowsNotifications/LICENSE.md` and `NOTICE.md`.
- Microsoft.Windows.SDK.NET.Ref targeting pack **10.0.19041.56**, Microsoft
  Corporation: `licenses/WindowsSDK/SDK-LICENSE.rtf`. The corresponding
  projection assembly and WinRT runtime are distributed unmodified.
- Microsoft CsWinRT runtime **2.2.0.48161**, MIT:
  `licenses/WindowsSDK/CSWINRT-LICENSE.txt` and `NOTICE.md` identify the source.

Package and upstream references: [notification package](https://www.nuget.org/packages/Microsoft.Toolkit.Uwp.Notifications/7.1.3),
[Microsoft Windows SDK license](https://aka.ms/WinSDKLicenseURL),
[CsWinRT license at the shipped source commit](https://github.com/microsoft/CsWinRT/blob/8649ee3eeb2445ca2a36d80d878ef60b96a6c65d/LICENSE).

## Installer technology

The installer uses [NSIS 3.13](https://nsis.sourceforge.io/) and its LZMA compression module. NSIS copyright belongs to its contributors. Most NSIS components use the zlib/libpng license; the LZMA module uses the Common Public License 1.0 with an express linking exception. The complete upstream notices and exception are reproduced in `licenses/NSIS.txt`. NSIS components are used without source modifications. The [official NSIS 3.13 download directory](https://sourceforge.net/projects/nsis/files/NSIS%203/3.13/) provides their source distribution. See [NSIS license terms](https://nsis.sourceforge.io/License).

## Microsoft prerequisites

The 4.0 development browser targets .NET 10 for x64 and its standalone preview bundles that runtime. The separately released 3.24 installer requires .NET Desktop Runtime 8 for x64 and a compatible Microsoft Visual C++ v14 Runtime for x64. When needed, setup downloads Microsoft's installers and runs them as separate prerequisites. Their own license terms and notices apply. Removing Corion retains these shared runtimes.

- .NET runtime and WPF source are provided by the .NET Foundation and contributors under the MIT license, with additional component notices: [.NET 8 license](https://github.com/dotnet/runtime/blob/release/8.0/LICENSE.TXT), [.NET 8 third party notices](https://github.com/dotnet/runtime/blob/release/8.0/THIRD-PARTY-NOTICES.TXT), and [WPF license](https://github.com/dotnet/wpf/blob/release/8.0/LICENSE.TXT).
- Microsoft Visual C++ Runtime is covered by Microsoft's terms: [Visual C++ Runtime license terms](https://visualstudio.microsoft.com/license-terms/vs2022-cruntime/) and [supported runtime downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist).

## Cave photographs

Photographs by **Bernard Gagnon / Bgag**, taken on 4 December 2013, are distributed under [Creative Commons Attribution-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/).

| Installed file | Original photograph |
| --- | --- |
| `assets/backgrounds/bhimbetka-hunt.jpg` | [Rock Shelter 8, Bhimbetka 03](https://commons.wikimedia.org/wiki/File:Rock_Shelter_8,_Bhimbetka_03.jpg) |
| `assets/backgrounds/bhimbetka-horse.jpg` | [Rock Shelter 9, Bhimbetka 02](https://commons.wikimedia.org/wiki/File:Rock_Shelter_9,_Bhimbetka_02.jpg) |
| `assets/backgrounds/bhimbetka-boar.jpg` | [Rock Shelter 15, Bhimbetka 02](https://commons.wikimedia.org/wiki/File:Rock_Shelter_15,_Bhimbetka_02.jpg) |

The installed copies are Wikimedia Commons resized versions at 3840 × 2560 pixels; the originals are 5184 × 3456 pixels. No local pixel edits were made. Corion displays a viewport crop and a dark overlay without changing the stored photograph. Retain attribution and the selected license when redistributing these photographs or their adaptations. Attribution does not imply the photographer's endorsement. Additional asset details are provided in `ASSET_CREDITS.md`.

## Standalone 4.0 runtime

The development preview bundles .NET 10 and WPF. Their license and component notices are retained under licenses/DotNet10 and licenses/Wpf10 in the standalone output. Source: https://github.com/dotnet/runtime/tree/release/10.0 and https://github.com/dotnet/wpf/tree/release/10.0. Earlier .NET 8 links above document the separately released 3.24 installer, which is unchanged.
