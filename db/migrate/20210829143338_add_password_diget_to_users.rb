class AddPasswordDigetToUsers < ActiveRecord::Migration[6.1]
  def change
    # usersテーブルにpasswordカラムを追加
    add_column :users, :password_digest, :string
  end
end
