Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      get :info, to: 'users#info'
    end

    resource :session, only: [:create, :destroy, :show]
    resources :campaigns
    resources :contributions, only: [:create]
    resources :rewards, only: [:index, :create, :show]

    get 'carousel', to: 'carousels#carousel'
    get 'search/:q', to: 'search#search'
  end


  root "static_pages#root"
end
