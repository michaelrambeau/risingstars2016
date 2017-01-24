静的サイトジェネレータ（"Static Site Generators" 略して SSG） は .html、.css、JavaScript といった　Web　サイトを構成するファイル一式を生成してくれるツールです。生成されたファイルは、Apache　や　Nginx　のシンプルな　Web　サーバーへ悩み無用でデプロイできます。データベースや　Web　アプリケーションフレームワークのセットアップも不要です。例えば、SGG　のひとつである {gatsby} は自らをこう表現しています:

> 1995年ころのようにサイトを構築する。

静的なWebサイトは高速、堅牢で、メンテナンスも容易です。

SSG　が人気なのは、静的なWebサイトを無料でホスティングできるサービスが多いことも要因でしょう。

* [Github pages](https://pages.github.com/)
* [Gitlab pages](http://pages.gitlab.io/)
* [Netlify](https://www.netlify.com/)
* [Surge](https://surge.sh/)
* [Now static](https://zeit.co/blog/now-static)

#### {hexo}

2016年でもっとも人気のあった　SSG　が　Node.js　でビルドする {hexo} です。とてもよくできた　SSG　で、Wordpreess　のような　CMS　に近く、ブログの構築に利用できます。i18n　 プラグインを含め、多くのフィーチャを提供しています。

#### {gatsby}

ニューカマーの {gatsby} のソリューションは非常に興味深いものです。静的　html　ファイルを生成するのに　React　のエコシステムを利用しており、競合と一線を画しています。React　コンポーネントを取り込んでいることからもわかるように, Markdown　やサーバーサイドレンダリングをサポートしており、パワフルな仕上がりになっています。
