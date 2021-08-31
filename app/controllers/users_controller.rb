class UsersController < ApplicationController
  # ユーザ一覧を表示するアクション
  # SQLにおける N対1問題 を防ぐために、includesメソッドを使用する.
  def index
    # usersテーブルにアクセスすると同時に、関連するテーブルを取得する。
    @users = User.includes(:task)
  end

  # ユーザー新規作成のビューファイルにアクセスするアクション
  def new
    @user = User.new
  end

  # ユーザーを新規作成するアクション
  # 新規登録した場合でもログイン状態になるように、log_inメソッドに情報を渡す。
  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to tasks_path, success:"Successful new registration!"
    else
      flash.now[:danger] = "Input correctly"
      render :new
    end
  end

  # ユーザー編集のビューファイルにアクセスするアクション
  def edit
    @user = User.find_by(id:params[:id])
  end

  # ユーザーの編集を行うアクション
  # nameとemailのみ編集可能にする。
  def update
    @user = User.find_by(id:params[:id])
    if @user.update(name: user_params[:name], email: user_params[:email])
      redirect_to tasks_path, success:"Successful new registration!"
    else
      render :edit
    end
  end

  # ストロングパラメータの定義
  # メソッドに変更を許可するカラム名を指定しておくことで、意図しないデータの保存を防ぐ
  # また、privateにすることでカプセル化する。
  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
