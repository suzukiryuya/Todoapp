class AddUserIdToTasks < ActiveRecord::Migration[6.1]
  def change
    #tasksテーブルにuser_idカラムを追加する.
    add_column :tasks, :user_id, :integer
  end
end
