# Fumiya Morishita Portfolio (Astro)

Appleライクな余白・タイポグラフィを意識した、静的生成ポートフォリオです。

## セットアップ

```bash
npm install
npm run dev
```

- 開発: `http://localhost:4321`
- ビルド: `npm run build`
- プレビュー: `npm run preview`

## コンテンツの追加方法

### プロフィール
- `src/content/profile.json` を編集
- 自己紹介文もこのファイルの `intro` から差し替え可能

### プロジェクト
- `src/content/projects/*.md` を追加
- frontmatter:
  - `title`
  - `summary`
  - `tags`
  - `date`
  - `repoUrl`
  - `demoUrl`
  - `featured`

本文は `目的 / 課題 / アプローチ / 技術 / 結果 / 学び` の見出し構成を推奨。

## デプロイ（GitHub Pages）

1. リポジトリの Settings > Pages で **GitHub Actions** を選択
2. `main`（または運用ブランチ）へ push
3. `.github/workflows/deploy.yml` がビルド＆デプロイを実行

必要に応じて `astro.config.mjs` の `site` を本番URLへ変更してください。
