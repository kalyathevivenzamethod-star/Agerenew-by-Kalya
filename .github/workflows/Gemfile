# Age Renew by Kalya - Gemfile para GitHub Pages

source "https://rubygems.org"

# Usar la gema de GitHub Pages que incluye Jekyll y plugins compatibles
gem "github-pages", group: :jekyll_plugins

# Gemas adicionales para el desarrollo local
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-gist"
  gem "jemoji"
  gem "jekyll-include-cache"
end

# Para desarrollo local en Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Para evitar problemas de timezone en Windows
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Para mejorar el rendimiento
gem "kramdown-parser-gfm"