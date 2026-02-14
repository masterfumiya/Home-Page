---
title: センサーデータ可視化ダッシュボード
summary: 複数センサーの時系列データをリアルタイム表示し、異常検知を支援するダッシュボードを設計しました。
tags:
  - React
  - D3.js
  - Python
  - API
date: 2025-07-10
repoUrl: https://github.com/example/sensor-dashboard
demoUrl: https://demo.example.com/sensor
featured: true
---

## 目的
実験中の状態変化を即時に把握し、記録漏れや異常値への対応を迅速化すること。

## 課題
- CSV確認に時間がかかる
- 同期ズレの原因特定が遅れる

## アプローチ
WebSocket配信と時系列チャートを組み合わせ、重要指標を優先表示する情報設計を採用。

## 技術
React, D3.js, FastAPI, Python

## 結果
異常値検知から対応までの時間を短縮し、実験停止の判断を定量的に支援。

## 学び
「見える化」は表示量より優先順位づけが重要。ダッシュボードの役割を明確化する必要を学びました。
