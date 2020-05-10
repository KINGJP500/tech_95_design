class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  add_flash_types :success, :danger, :info
  include DeviseWhitelist 
  include SetSource
  include CurrentUserConcern  
  include DefaultPageContent 
  include CopyrightConcern
end
