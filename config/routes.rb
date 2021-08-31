Rails.application.routes.draw do
  get    'sessions/new'
  get    '/' => "home#top"
  # Sessionsコントローラーのルーティングを設定
  get    '/login' => "sessions#new"
  post   '/login' => "sessions#create"
  delete '/logout' => "sessions#destroy"

  # resourcesを用いて、各種HTTPメソッドとコントローラー内のアクションを指すURLが対応づける.
  resources :tasks
  resources :users
end
