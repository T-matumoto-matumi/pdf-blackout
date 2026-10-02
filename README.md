# PDF黒塗り

PDFをローカルで読み込み、ページ上でドラッグした範囲を黒塗りしてダウンロードする静的Webツールです。

- PDFはサーバーへ送信されません。ファイル、選択範囲、パスワードはメモリ上でのみ保持します。
- ページ選択、拡大縮小、選択削除、Undo、パスワード付きPDFに対応。
- 出力は新規作成する画像のみのPDFです。全ページをラスタライズし、選択したピクセルを上書きします。原本の文字オブジェクト、フォーム、リンク、添付ファイル、メタデータはコピーしません。
- 出力の文字検索・コピー、フォーム編集、元の電子署名は維持されません。
- 原本ファイルは変更しません。出力は同じページ数・表示方向で保存します。
- PDF.js 5.6.205 / pdf-lib 1.17.1 を同梱。CDNや外部解析サービスは利用しません。

`index.html` がエントリーポイントです。`app.mjs` が画面操作、`redact.mjs` が黒塗りPDF生成を担当します。


## GitHub Pages

GitHub の Settings → Pages で Deploy from a branch、main、/(root) を選択してください。

公開URL: https://T-matumoto-matumi.github.io/pdf-blackout/

PDF.js用のCMap・標準フォント・WebAssemblyは `vendor/binary-data.json.gz` に元のバイト列を保持してまとめています。`binary-data.mjs` のデータファクトリが必要なファイルを復元します。

## 手動アップロード手順

1. ZIPを展開します。
2. https://github.com/T-matumoto-matumi/pdf-blackout を開きます。
3. Add file → Upload files を選びます。
4. 展開したフォルダーの「中身」をすべてドラッグします。index.html、app.mjs、binary-data.mjs、redact.mjs、style.css、README.md と vendor フォルダーがリポジトリ直下になるようにしてください。ZIPファイル自体や外側のフォルダーはアップロードしません。
5. Commit changes を押します。
6. https://github.com/T-matumoto-matumi/pdf-blackout/settings/pages を開きます。
7. Source を Deploy from a branch、Branch を main、フォルダーを /(root) にして Save を押します。
8. 公開が完了したら https://T-matumoto-matumi.github.io/pdf-blackout/ を開きます。

PDFのアップロード・黒塗り・保存ができるか、まず画面内の「サンプルで試す」で確認してください。
