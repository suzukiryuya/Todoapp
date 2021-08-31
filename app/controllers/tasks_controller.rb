class TasksController < ApplicationController
  # 投稿一覧を表示するアクション 作成時間の降順に表示する
  def index
    @tasks = Task.all.order(created_at: :desc)
  end

  # タスク追加画面のビューにアクセスするアクション
  def new
    @task = Task.new
  end

  # タスクの新規作成を行うアクション
  def create
    @task = Task.new(task_params)
    if @task.save
      redirect_to tasks_path, success: "Successfully added the task!"
    else
      render :new
    end
  end

  # タスク編集画面のビューにアクセスするアクション
  def edit
    @task = Task.find_by(id:params[:id])
  end

  # タスクの編集を行うアクション
  def update
    @task = Task.find_by(id:params[:id])
    if @task.update(task_params)
      redirect_to tasks_path, success: "Successfully updated the task!"
    else
      render :edit
    end
  end

  # タスクの削除を行うアクション
  def destroy
    Task.find_by(id:params[:id]).destroy
    redirect_to tasks_path, success: "Deleted the task!"
  end

  # ストロングパラメータの定義
  # メソッドに変更を許可するカラム名を指定しておくことで、意図しないデータの保存を防ぐ
  # また、privateにすることでカプセル化する。
  private
  def task_params
    params.require(:task).permit(:category, :content).merge(user_id: current_user.id)
  end
end
