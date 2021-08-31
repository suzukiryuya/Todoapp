class Task < ApplicationRecord
  # taskがuserに従属している
  belongs_to :user
  # 各カラムにバリデーションを追加する
  # category 空白でない 最大長20文字
  # content 空白でない 最大長20文字
  # user_id 空白でない
  validates :category, presence: true, length: { maximum: 20 }
  validates :content,  presence: true, length: { maximum: 50 }
  validates :user_id, presence: true
end
