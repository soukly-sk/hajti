# SOUKLY Android and Windows apps

This repository can build two installable wrappers around the SOUKLY storefront:

- Android: Capacitor APK (debug build for testing).
- Windows: Electron NSIS x64 installer.

Both apps package the current `index.html` locally. Product data, authentication, and orders still use the existing Supabase project and WhatsApp flow, so an internet connection is required.

## Download builds

After a push to `main` that changes the storefront or app files, open the repository's **Actions** tab and select the latest **Build SOUKLY apps** run. Download:

- `SOUKLY-Android-APK`
- `SOUKLY-Windows-EXE`

You can also start a build manually with **Actions → Build SOUKLY apps → Run workflow**.

## Important release notes

The APK produced by this workflow is a debug APK intended for testing and direct installation, not a Play Store release. A signed Android release requires a private keystore and signing secrets configured by the repository owner.

The Windows installer is currently unsigned. Windows may display a SmartScreen warning until the app has a trusted code-signing certificate.

The Windows build targets x64. Both apps require internet access for Supabase-backed products and checkout.
