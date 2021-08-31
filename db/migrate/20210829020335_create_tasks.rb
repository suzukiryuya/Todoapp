class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    # taksテーブルの生成
    # category: タスクのカテゴリ
    # content: タスクの内容
    create_table :tasks do |t|
      t.string :category
      t.string :content

      #created_atとupdated_atの二つのカラムを追加する。
      t.timestamps
    end
  end
end
