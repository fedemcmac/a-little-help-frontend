Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
        resources :users, only: [:index, :create, :show]
        resources :jobs, only: [:index, :create, :show]
        post '/login', to: 'auth#create'
        get '/validate', to: 'auth#validate_token'
  end
end