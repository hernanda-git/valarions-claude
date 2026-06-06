# Valarions Claude

**Valarions Claude** — CLI coding-agent sumber terbuka untuk penyedia model cloud dan lokal.

Fork dari [OpenClaude](https://github.com/Gitlawb/openclaude) oleh **GitLawb**, dikustomisasi dan dikelola oleh [Hernanda](https://github.com/hernanda-git).

Gunakan API kompatibel-OpenAI, Gemini, GitHub Models, Codex OAuth, Codex, Ollama, Atomic Chat, dan backend lain yang didukung sambil tetap mempertahankan satu alur kerja berbasis terminal: prompt, alat, agen, MCP, perintah slash, dan output streaming.

[![PR Checks](https://github.com/Gitlawb/openclaude/actions/workflows/pr-checks.yml/badge.svg?branch=main)](https://github.com/Gitlawb/openclaude/actions/workflows/pr-checks.yml)
[![Release](https://img.shields.io/github/v/tag/Gitlawb/openclaude?label=release&color=0ea5e9)](https://github.com/Gitlawb/openclaude/tags)
[![Discussions](https://img.shields.io/badge/discussions-open-7c3aed)](https://github.com/Gitlawb/openclaude/discussions)
[![Security Policy](https://img.shields.io/badge/security-policy-0f766e)](SECURITY.md)
[![License](https://img.shields.io/badge/license-MIT-2563eb)](LICENSE)

[Memulai Cepat](#memulai-cepat) | [Panduan Setup](#panduan-setup) | [Penyedia yang Didukung](#penyedia-yang-didukung) | [Build dari Sumber](#build-dari-sumber-dan-pengembangan-lokal) | [Ekstensi VS Code](#ekstensi-vs-code) | [Sponsor](#sponsor) | [Komunitas](#komunitas)

## Sponsor

<table align="center">
  <tr>
    <td align="center" width="150" height="80">
      <a href="https://gitlawb.com">
        <img src="https://gitlawb.com/logo.png" alt="GitLawb logo" width="72">
      </a>
    </td>
    <td align="center" width="150" height="80">
      <a href="https://bankr.bot">
        <img src="https://bankr.bot/favicon.svg" alt="Bankr.bot logo" width="72">
      </a>
    </td>
    <td align="center" width="150" height="80">
      <a href="https://atomic.chat/">
        <img src="docs/assets/atomic-chat-logo.png" alt="Atomic Chat logo" width="72">
      </a>
    </td>
    <td align="center" width="150" height="80">
      <a href="https://mimo.mi.com">
        <img src="https://mimo.xiaomi.com/mimo-v2-pro/assets/logo.svg" alt="Xiaomi MiMo logo" width="136">
      </a>
    </td>
    <td align="center" width="150" height="80">
      <a href="https://www.atlascloud.ai/">
        <img src="docs/assets/atlas-cloud-banner.png" alt="Atlas Cloud logo" width="136">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center"><a href="https://gitlawb.com"><strong>GitLawb</strong></a></td>
    <td align="center"><a href="https://bankr.bot"><strong>Bankr.bot</strong></a></td>
    <td align="center"><a href="https://atomic.chat/"><strong>Atomic Chat</strong></a></td>
    <td align="center"><a href="https://mimo.mi.com"><strong>Xiaomi MiMo</strong></a></td>
    <td align="center"><a href="https://www.atlascloud.ai/"><strong>Atlas Cloud</strong></a></td>
  </tr>
</table>

## Riwayat Bintang

[![Star History Chart](https://api.star-history.com/chart?repos=gitlawb/openclaude&type=date&legend=top-left)](https://www.star-history.com/?repos=gitlawb%2Fopenclaude&type=date&legend=top-left)

## Mengapa Valarions Claude

- Gunakan satu CLI di berbagai API cloud dan backend model lokal
- Simpan profil penyedia di dalam aplikasi dengan `/provider`
- Jalankan dengan layanan kompatibel-OpenAI, Gemini, GitHub Models, Codex OAuth, Codex, Ollama, Atomic Chat, dan penyedia lain yang didukung
- Pertahankan alur kerja coding-agent di satu tempat: bash, alat file, grep, glob, agen, tugas, MCP, dan alat web
- Gunakan ekstensi VS Code bawaan untuk integrasi peluncuran dan dukungan tema

## Memulai Cepat

### Instalasi

```bash
npm install -g @gitlawb/openclaude@latest
```

Jika Anda menggunakan Arch Linux, Anda dapat menginstal OpenClaude dari [paket AUR](https://aur.archlinux.org/packages/openclaude) yang dikelola komunitas:
```bash
paru -S openclaude
```

Jika setelah instalasi muncul laporan `ripgrep not found`, instal ripgrep di seluruh sistem dan pastikan `rg --version` berfungsi di terminal yang sama sebelum memulai OpenClaude.

**Verifikasi / pecahkan masalah versi terinstal:**

```bash
openclaude --version
npm view @gitlawb/openclaude dist-tags
npm install -g @gitlawb/openclaude@latest
```

### Mulai

```bash
openclaude
```

Di dalam OpenClaude:

- jalankan `/provider` untuk panduan penyiapan penyedia dan profil tersimpan
- jalankan `/onboard-github` untuk pendaftaran GitHub Models

### Setup OpenAI Tercepat

macOS / Linux:

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_API_KEY=***
export OPENAI_MODEL=gpt-4o

openclaude
```

Windows PowerShell:

```powershell
$env:CLAUDE_CODE_USE_OPENAI="1"
$env:OPENAI_API_KEY="***"
$env:OPENAI_MODEL="gpt-4o"

openclaude
```

### Setup Ollama Lokal Tercepat

macOS / Linux:

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL=http://localhost:11434/v1
export OPENAI_MODEL=qwen2.5-coder:7b

openclaude
```

Windows PowerShell:

```powershell
$env:CLAUDE_CODE_USE_OPENAI="1"
$env:OPENAI_BASE_URL="http://localhost:11434/v1"
$env:OPENAI_MODEL="qwen2.5-coder:7b"

openclaude
```

## Panduan Setup

Panduan ramah-pemula:

- [Setup Non-Teknis](docs/non-technical-setup.md)
- [Panduan Cepat Windows](docs/quick-start-windows.md)
- [Panduan Cepat macOS / Linux](docs/quick-start-mac-linux.md)

Panduan lanjutan dan build dari sumber:

- [Setup Lanjutan](docs/advanced-setup.md)
- [Instalasi Android](ANDROID_INSTALL.md)

## Penyedia yang Didukung

| Penyedia | Jalur Setup | Catatan |
| --- | --- | --- |
| Kompatibel-OpenAI | `/provider` atau env vars | Bekerja dengan OpenAI, OpenRouter, DeepSeek, Groq, Mistral, LM Studio, dan server `/v1` kompatibel lainnya |
| Hicap | `/provider` atau env vars kompatibel-OpenAI | Menggunakan otentikasi `api-key`, menemukan model dari `/models` tanpa autentikasi, dan mendukung mode Responses untuk model `gpt-` |
| Gemini | `/provider` atau env vars | Mendukung API key saja |
| GitHub Models | `/onboard-github` | Pendaftaran interaktif dengan kredensial tersimpan |
| Codex OAuth | `/provider` | Membuka login ChatGPT di peramban Anda dan menyimpan kredensial Codex dengan aman |
| Codex | `/provider` | Menggunakan otentikasi Codex CLI yang sudah ada, penyimpanan aman OpenClaude, atau kredensial env |
| Gitlawb Opengateway | Default awal, `/provider`, atau env vars | Gateway cerdas di `https://opengateway.gitlawb.com/v1`; memerlukan API key dari https://gitlawb.com/opengateway/keys dan merutekan model mitra Xiaomi MiMo dan GMI Cloud berdasarkan `OPENAI_MODEL` |
| OpenCode Zen | `/provider` atau env vars | Gateway AI bayar-per-pakai (41 model); menggunakan `OPENCODE_API_KEY` via `https://opencode.ai/zen/v1`; key bersama dengan OpenCode Go |
| OpenCode Go | `/provider` atau env vars | Langganan $10/bulan untuk model terbuka (12 model); menggunakan `OPENCODE_API_KEY` via `https://opencode.ai/zen/go/v1`; key bersama dengan OpenCode Zen |
| Xiaomi MiMo | `/provider` atau env vars | API kompatibel-OpenAI di `https://mimo.mi.com`; menggunakan `MIMO_API_KEY` dan default ke `mimo-v2.5-pro` |
| Ollama | `/provider` atau env vars | Inferensi lokal tanpa API key |
| Atomic Chat | `/provider`, env vars, atau `bun run dev:atomic-chat` | Penyedia Model Lokal; mendeteksi model yang dimuat secara otomatis |
| Bedrock / Vertex / Foundry | env vars | Rute cloud keluarga Anthropic; Vertex untuk Claude di Vertex AI, bukan model Model Garden sembarang |

## Yang Berfungsi

- **Alur kerja berbasis alat**: Bash, baca/tulis/edit file, grep, glob, agen, tugas, MCP, dan perintah slash
- **Respons streaming**: Output token waktu-nyata dan progres alat
- **Pemanggilan alat**: Perulangan alat multi-langkah dengan panggilan model, eksekusi alat, dan respons lanjutan
- **Gambar**: Input URL dan base64 untuk penyedia yang mendukung vision
- **Profil penyedia**: Setup terbimbing plus dukungan profil penyedia tingkat pengguna tersimpan
- **Backend model lokal dan jarak jauh**: API cloud, server lokal, dan inferensi lokal Apple Silicon

## Catatan Penyedia

Valarions Claude mendukung banyak penyedia, tetapi perilaku tidak identik di semua penyedia.

- Fitur spesifik-Anthropic mungkin tidak ada di penyedia lain
- Kualitas alat sangat bergantung pada model yang dipilih
- Model lokal yang lebih kecil dapat kesulitan dengan alur alat multi-langkah yang panjang
- Beberapa penyedia menerapkan batas output lebih rendah dari default CLI, dan OpenClaude beradaptasi jika memungkinkan
- Gitlawb Opengateway adalah default instalasi baru dan memerlukan API key dari https://gitlawb.com/opengateway/keys. Menggunakan satu base URL kompatibel-OpenAI; beralih antara `mimo-*` dan `google/gemini-3.1-flash-lite-preview` dengan `/model`, dan jangan mengatur base URL ke `/v1/xiaomi-mimo`.
- Xiaomi MiMo menggunakan otentikasi header `api-key` pada rute kompatibel-OpenAI langsung dan saat ini tidak mendukung pelaporan `/usage` di OpenClaude

Untuk hasil terbaik, gunakan model dengan dukungan pemanggilan alat/fungsi yang kuat.

## Perutean Agen

Valarions Claude dapat merutekan agen yang berbeda ke model yang berbeda melalui pengaturan berbasis konfigurasi. Ini berguna untuk optimalisasi biaya atau membagi pekerjaan berdasarkan kekuatan model.

Tambahkan ke `~/.openclaude.json`:

```json
{
  "agentModels": {
    "deepseek-v4-flash": {
      "base_url": "https://api.deepseek.com/v1",
      "api_key": "sk-your-key"
    },
    "zai-default": {
      "model": "glm-5.1",
      "base_url": "https://api.z.ai/api/coding/paas/v4",
      "api_key": "sk-your-key"
    },
    "gpt-4o": {
      "base_url": "https://api.openai.com/v1",
      "api_key": "sk-your-key"
    }
  },
  "agentRouting": {
    "Explore": "deepseek-v4-flash",
    "Plan": "gpt-4o",
    "general-purpose": "gpt-4o",
    "frontend-dev": "zai-default",
    "default": "gpt-4o"
  }
}
```

Ketika tidak ada kecocokan perutean, penyedia global tetap menjadi fallback.

Nilai `agentRouting` dan override `model` alat Agen eksplisit cocok dengan kunci di `agentModels`. Secara default, kunci tersebut juga merupakan string model yang dikirim ke penyedia. Atur `agentModels.<key>.model` ketika Anda ingin kunci rute lokal seperti `zai-default` memanggil nama model penyedia yang berbeda seperti `glm-5.1`.

> **Catatan:** `/provider` mengubah penyedia global/induk untuk sesi Anda saat ini. `agentModels` dan `agentRouting` khusus untuk mengonfigurasi override penyedia per-agen sambil menjaga sesi induk tidak berubah.

> **Catatan:** Nilai `api_key` di `settings.json` disimpan dalam teks biasa. Jaga kerahasiaan file ini dan jangan commit ke kontrol versi.

## Pencarian Web dan Ambil Data

Secara default, `WebSearch` berfungsi pada model non-Anthropic menggunakan DuckDuckGo. Ini memberikan GPT-4o, DeepSeek, Gemini, Ollama, dan penyedia kompatibel-OpenAI lainnya jalur pencarian web gratis.

> **Catatan:** Fallback DuckDuckGo bekerja dengan mengikis hasil pencarian dan mungkin dibatasi, diblokir, atau tunduk pada Ketentuan Layanan DuckDuckGo. Jika Anda menginginkan opsi yang lebih andal, konfigurasikan Firecrawl.

Untuk backend native-Anthropic dan respons Codex, OpenClaude mempertahankan perilaku pencarian web penyedia asli.

`WebFetch` berfungsi, tetapi jalur HTTP dasar plus HTML-ke-markdown masih bisa gagal di situs yang dirender JavaScript atau situs yang memblokir permintaan HTTP biasa.

Atur kunci API [Firecrawl](https://firecrawl.dev) jika Anda menginginkan perilaku pencarian/ambil data bertenaga Firecrawl:

```bash
export FIRECRAWL_API_KEY=your-key-here
```

Dengan Firecrawl diaktifkan:

- `WebSearch` dapat menggunakan API pencarian Firecrawl sementara DuckDuckGo tetap menjadi jalur gratis default untuk model non-Claude
- `WebFetch` menggunakan endpoint scrape Firecrawl alih-alih HTTP mentah, menangani halaman yang dirender JS dengan benar

Tingkat gratis di [firecrawl.dev](https://firecrawl.dev) mencakup 500 kredit. Kunci bersifat opsional.

---

## Server gRPC Tanpa Kepala

Valarions Claude dapat dijalankan sebagai layanan gRPC tanpa kepala, memungkinkan Anda mengintegrasikan kemampuan agennya (alat, bash, pengeditan file) ke dalam aplikasi lain, pipeline CI/CD, atau antarmuka pengguna kustom. Server menggunakan streaming dua arah untuk mengirim potongan teks waktu-nyata, panggilan alat, dan meminta izin untuk perintah sensitif.

### 1. Mulai Server gRPC

Mulai mesin inti sebagai layanan gRPC di `localhost:50051`:

```bash
npm run dev:grpc
```

#### Konfigurasi

| Variabel | Default | Deskripsi |
|-----------|-------------|------------------------------------------------|
| `GRPC_PORT` | `50051` | Port yang digunakan server gRPC |
| `GRPC_HOST` | `localhost` | Alamat bind. Gunakan `0.0.0.0` untuk mengekspos di semua antarmuka (tidak disarankan tanpa autentikasi) |

### 2. Jalankan Klien CLI Uji

Kami menyediakan klien CLI ringan yang berkomunikasi secara eksklusif melalui gRPC. Berfungsi seperti CLI interaktif utama, merender warna, streaming token, dan meminta izin alat (y/n) melalui event `action_required` gRPC.

Di terminal terpisah, jalankan:

```bash
npm run dev:grpc:cli
```

*Catatan: Definisi gRPC berada di `src/proto/openclaude.proto`. Anda dapat menggunakan file ini untuk menghasilkan klien dalam Python, Go, Rust, atau bahasa lainnya.*

---

## Build dari Sumber dan Pengembangan Lokal

```bash
bun install
bun run build
node dist/cli.mjs
```

Perintah yang berguna:

- `bun run dev`
- `bun test`
- `bun run test:coverage`
- `bun run security:pr-scan -- --base origin/main`
- `bun run smoke`
- `bun run doctor:runtime`
- `bun run verify:privacy`
- `bun test ...` terfokus untuk area yang Anda sentuh

## Pengujian dan Cakupan

Valarions Claude menggunakan penguji bawaan Bun untuk pengujian unit.

Jalankan suite unit lengkap:

```bash
bun test
```

Hasilkan cakupan pengujian unit:

```bash
bun run test:coverage
```

Buka laporan cakupan visual:

```bash
open coverage/index.html
```

Jika Anda sudah memiliki `coverage/lcov.info` dan hanya ingin membangun ulang UI:

```bash
bun run test:coverage:ui
```

Gunakan pengujian terfokus ketika Anda hanya menyentuh satu area:

- `bun run test:provider`
- `bun run test:provider-recommendation`
- `bun test path/to/file.test.ts`

Validasi kontributor yang disarankan sebelum membuka PR:

- `bun run build`
- `bun run smoke`
- `bun run test:coverage` untuk cakupan unit yang lebih luas ketika perubahan Anda mempengaruhi runtime bersama atau logika penyedia
- `bun test ...` terfokus untuk file dan alur yang Anda ubah

Output cakupan ditulis ke `coverage/lcov.info`, dan OpenClaude juga menghasilkan peta panas bergaya aktivitas git di `coverage/index.html`.

## Struktur Repositori

- `src/` - CLI/runtime inti
- `scripts/` - skrip build, verifikasi, dan pemeliharaan
- `docs/` - dokumentasi setup, kontributor, dan proyek
- `python/` - pembantu Python mandiri dan pengujiannya
- `vscode-extension/openclaude-vscode/` - Ekstensi VS Code
- `.github/` - otomatisasi repo, template, dan konfigurasi CI
- `bin/` - entrypoint peluncur CLI

## Ekstensi VS Code

Repositori ini menyertakan ekstensi VS Code di [`vscode-extension/openclaude-vscode`](vscode-extension/openclaude-vscode) untuk integrasi peluncuran OpenClaude, UI pusat kendali sadar-penyedia, dan dukungan tema.

## Keamanan

Jika Anda yakin menemukan masalah keamanan, lihat [SECURITY.md](SECURITY.md).

## Komunitas

- Gunakan [GitHub Discussions](https://github.com/Gitlawb/openclaude/discussions) untuk Tanya Jawab, ide, dan percakapan komunitas
- Gunakan [GitHub Issues](https://github.com/Gitlawb/openclaude/issues) untuk bug yang terkonfirmasi dan pekerjaan fitur yang dapat ditindaklanjuti

## Berkontribusi

Kontribusi sangat diterima.

Untuk perubahan besar, buka issue terlebih dahulu agar ruang lingkup jelas sebelum implementasi. Perintah validasi yang membantu meliputi:

- `bun run build`
- `bun run test:coverage`
- `bun run smoke`
- `bun test ...` terfokus untuk file dan alur yang Anda ubah


## Penyangkalan

Valarions Claude adalah proyek komunitas independen dan tidak berafiliasi dengan, didukung oleh, atau disponsori oleh Anthropic.

Valarions Claude berasal dari basis kode Claude Code dan telah dimodifikasi secara substansial untuk mendukung banyak penyedia dan penggunaan terbuka. "Claude" dan "Claude Code" adalah merek dagang dari Anthropic PBC. Lihat [LICENSE](LICENSE) untuk detailnya.

## Lisensi

Lihat [LICENSE](LICENSE).
