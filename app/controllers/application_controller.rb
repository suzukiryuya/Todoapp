class ApplicationController < ActionController::Base
  #Sessionヘルパーモジュールをインクルードする
  include SessionsHelper
  #フラッシュメッセージのキーを許可する記述
  add_flash_types :success, :info, :warning, :danger
end
