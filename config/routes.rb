Rails.application.routes.draw do
  root to: 'pages#home'
  get '/about' => 'pages#about'
  get '/services' => 'pages#services'
  get '/soccer' => 'pages#soccer'
  get '/basketball' => 'pages#basketball'
  get '/mma' => 'pages#mma'
  get '/football' => 'pages#football'
  get '/sports-marketing' => 'pages#sports-marketing'
  get '/clients' => 'pages#clients'
  get '/contact' => 'pages#contact'
  get '/media' => 'pages#media'

  devise_for :users
  resources :users
end
