Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resources :cats, only: [:index, :show, :new, :create, :edit, :update]
  resources :cat_rental_requests, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]


  #haven't added the post approve and post deny
  #what is below
  #root to: redirect("/cats")
  #does this automatically redirect all pages to the main page?
end
