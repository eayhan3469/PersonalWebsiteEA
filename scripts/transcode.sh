#!/usr/bin/env bash
set -u
BIN="/c/Users/ego_g/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.1-full_build/bin"
export PATH="$BIN:$PATH"

ROOT="C:/Users/ego_g/OneDrive/Desktop/PersonalWebsite"
SRC="$ROOT/_media-source"
POUT="$ROOT/assets/video/prototypes"
WOUT="$ROOT/assets/video/work"
PIMG="$ROOT/assets/img/prototypes"
WIMG="$ROOT/assets/img/work"
mkdir -p "$SRC" "$POUT" "$WOUT" "$PIMG" "$WIMG"

# Move originals out of the deploy tree (once)
for f in "$ROOT/assets/video"/*.mp4; do
  [ -e "$f" ] || continue
  mv -f "$f" "$SRC/"
done

start_at() { # 12% into the clip, capped so we still get the window
  local dur; dur=$(ffprobe -v error -show_entries format=duration -of default=nk=1:nw=1 "$1" 2>/dev/null)
  awk -v d="$dur" 'BEGIN{ s=d*0.12; if(s<0)s=0; m=d-13; if(m<0)m=0; if(s>m)s=m; printf "%.2f", s }'
}

enc_proto() { # src slug
  local src="$SRC/$1.mp4" slug="$2"
  [ -e "$src" ] || { echo "MISSING $src"; return; }
  local ss; ss=$(start_at "$src")
  echo ">> proto $slug (ss=$ss)"
  ffmpeg -hide_banner -loglevel error -y -ss "$ss" -t 12 -i "$src" -an \
    -vf "scale=480:640:force_original_aspect_ratio=increase,crop=480:640,fps=24" \
    -c:v libx264 -crf 30 -preset veryfast -profile:v high -pix_fmt yuv420p \
    -movflags +faststart "$POUT/$slug.mp4"
  ffmpeg -hide_banner -loglevel error -y -ss 1.5 -i "$POUT/$slug.mp4" -vframes 1 -q:v 4 "$PIMG/$slug.jpg"
}

enc_work() { # src slug
  local src="$SRC/$1.mp4" slug="$2"
  [ -e "$src" ] || { echo "MISSING $src"; return; }
  local ss; ss=$(start_at "$src")
  echo ">> work $slug (ss=$ss)"
  ffmpeg -hide_banner -loglevel error -y -ss "$ss" -t 16 -i "$src" -an \
    -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=30" \
    -c:v libx264 -crf 28 -preset veryfast -profile:v high -pix_fmt yuv420p \
    -movflags +faststart "$WOUT/$slug.mp4"
  ffmpeg -hide_banner -loglevel error -y -ss 2 -i "$WOUT/$slug.mp4" -vframes 1 -q:v 3 "$WIMG/$slug.jpg"
}

# ---- Work (featured) ----
enc_work "Ketz" "ketz"
enc_work "TopacBattleVideo" "topac-battle"
enc_work "FreeCastle-SurvivalStore" "freecastle"
enc_work "PixelBlock" "pixelblock"

# ---- Prototypes ----
enc_proto "2048Factory" "factory-2048"
enc_proto "BloomPick" "bloom-pick"
enc_proto "CallBreak" "callbreak"
enc_proto "ColorWar" "color-war"
enc_proto "CrossFit" "crossfit"
enc_proto "CryptoCollect3D" "crypto-collect-3d"
enc_proto "DirtyZone" "dirty-zone"
enc_proto "DrawDelivery" "draw-delivery"
enc_proto "FruitDrop3D" "fruit-drop-3d"
enc_proto "GemFit" "gemfit"
enc_proto "Go4EmpireVideo" "go4empire"
enc_proto "HoneyFill" "honey-fill"
enc_proto "JellyBoom" "jelly-boom"
enc_proto "MermaidFame" "mermaid-fame"
enc_proto "PlugItIn" "plug-it-in"
enc_proto "RagdollPinPon" "ragdoll-pinpon"
enc_proto "SewRun" "sew-run"
enc_proto "Terran" "terran"
enc_proto "TiltColor" "tilt-color"
enc_proto "WordKnit" "word-knit"

echo "=== DONE ==="
du -sh "$POUT" "$WOUT"
ls -la "$POUT" "$WOUT"

# --- Special cases (baked-in bars in the source) ---
# PixelBlock: portrait game pillarboxed inside 1920x1080 -> crop then treat as prototype
#   -vf "crop=496:1080:712:0,scale=480:640:force_original_aspect_ratio=increase,crop=480:640,fps=24"
# FreeCastle: ultrawide letterboxed inside 2560x1440 -> crop then 16:9 work clip
#   -ss 20 -t 16 -vf "crop=2560:980:0:230,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=30"
