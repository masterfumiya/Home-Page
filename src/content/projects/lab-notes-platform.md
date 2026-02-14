---
title: 研究ノート共有プラットフォーム
summary: 研究室内の実験記録を一元管理し、記録の再現性と検索性を向上させるWebアプリを開発しました。
tags:
  - Astro
  - TypeScript
  - SQLite
  - UX
date: 2025-12-01
repoUrl: https://github.com/example/lab-notes
demoUrl: https://demo.example.com/lab-notes
featured: true
---

## 目的
研究室で個別管理されていたノートを統合し、引き継ぎや再現実験を素早く行える環境を作ること。

## 課題
- 記録フォーマットが人によって異なり比較が困難
- 口頭共有に依存し、履歴追跡が難しい

## アプローチ
テンプレート化された入力フローとタグ検索を実装し、記録ルールをUI側で自然に誘導しました。

## 技術
Astro, TypeScript, SQLite, Tailwind CSS

## 結果
実験ログの検索時間を約40%削減。メンバー間の引き継ぎコストが明確に改善。

## 学び
ドメイン知識をUIの制約として反映すると、入力品質と運用定着率が上がることを確認しました。
