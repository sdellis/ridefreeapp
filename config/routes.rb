Rails.application.routes.draw do
  #devise_for :models
  devise_for :users, defaults: { format: :json }, 
              controllers: {
                sessions: 'users/sessions',
                registrations: 'users/registrations'
              }
  get '/member-data', to: 'members#show'
  namespace :api do
    namespace :v1 do
      resources :rides
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
