class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    # usersテーブルの生成
    # name: ユーザー名
    # email: ユーザーのemail
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
