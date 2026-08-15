# Mojo Docs — Tools That Don't Upload Your File to a Stranger's Server

<p align="center">
  <img src="https://raw.githubusercontent.com/maisachinsharmahu/mojodocs-public/main/docs/assets/banner.png" alt="Mojo Docs Banner" width="100%">
</p>

<p align="center">
  <b>mojodocs.in — compress a PDF, remove a background, check if an image
  is AI-generated, all of it running in your own browser.</b>
</p>

Search "compress PDF online" and you'll land on a site that uploads your
file to some server you know nothing about, shows you three ads, and maybe
gives it back to you. Same story for background removal, image converters,
most of the free tools people use every day quietly run on somebody else's
server, with your file sitting there the whole time.

Mojo Docs does the same jobs, but the processing happens right there in your
browser tab. Your file never leaves your device.

**[mojodocs.in](https://mojodocs.in)**

---

## What's on it

| Category | What it does | Try it |
| :--- | :--- | :--- |
| Musical Instruments | Playable virtual harmonium, piano, guitar, violin, organ | [Open](https://mojodocs.in/audio/web-harmonium/) |
| PDF Suite | Compress, merge, and convert PDFs locally | [Open](https://mojodocs.in/pdf/) |
| Image Lab | Background removal, upscaling, format conversion | [Open](https://mojodocs.in/image/) |
| Forensic Lab | Checks whether an image looks AI-generated | [Open](https://mojodocs.in/image/deepfake-detector/) |
| Developer Hub | JSON formatter, Redis and SQLite viewers, regex tester | [Open](https://mojodocs.in/dev/) |
| Creative Studio | Video compression and screen recording | [Open](https://mojodocs.in/video/) |

---

## Why it's built this way

Everything on Mojo Docs runs client-side, in your browser, using
WebAssembly to get near-native speed without a server in the loop. That
means no upload wait, no file size limits tied to someone else's storage
plan, and nothing about your file ever sitting on a server you don't
control.

I'm not getting into the exact engineering here, this is the part of the
product I care most about protecting, but if you're curious how a specific
tool works, ask me directly.

---

This repository is a public teaser for the project. The actual tools live at
**[mojodocs.in](https://mojodocs.in)**, the source stays closed.

<p align="center">
  <a href="https://sachinsharma.dev">Built by Sachin Sharma</a>
</p>
