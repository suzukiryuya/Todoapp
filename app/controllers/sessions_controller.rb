class SessionsController < ApplicationController
  # ログインページを生成するアクション
  def new
  end

  # ログインするアクション
  def create
    # 入力として受け取ったemailからユーザーを取り出す.
    user = User.find_by(email: params[:session][:email].downcase)
    # 入力されたemailのユーザーが存在する && 入力されたパスワードがそのユーザーのものである場合
    if user && user.authenticate(params[:session][:password])
      # ログイン後のページへ遷移 cookiesに情報を追加する
      log_in user
      redirect_to tasks_path, success: "You are now logged!"
    else
      # そのままログインページへ
      flash.now[:danger] = 'Invalid email or password.'
      render :new
    end
  end

  # ログインしていたユーザーがログアウトするアクション
  # ログイン後はトップページに遷移する.
  def destroy
    #現在ログインしているユーザーをログアウトする　ログインしているユーザーを取得する
    log_out
    redirect_to '/'
  end
end
