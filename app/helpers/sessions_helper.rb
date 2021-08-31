module SessionsHelper
  # 渡されたユーザー情報をcookiesに保存するメソッド
  def log_in(user)
    # 暗号化済のユーザーIDが一時的に保存される。
    session[:user_id] = user.id
  end

  # ログインしているユーザーを返すメソッド
  def current_user
    # cookieにuser_idが保存されていれば、ユーザー情報を取得する
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  # ユーザーログインしているかを判別するメソッド
  def logged_in?
    # current_userが存在しているときに、trueを返す.
    current_user.present?
  end

  # ログアウトするメソッド
  def log_out
    # cookiesに保存されているuser_idを削除して、nilを代入することでログインしていない状態を表す。
    session.delete(:user_id)
    @current_user = nil
  end
end
