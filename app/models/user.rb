class User < ApplicationRecord
  # ユーザーとタスクが 1対多 である関係を記述する。
  has_many :task
  # ハッシュ化したパスワードで認証できるようになる。
  has_secure_password
  # 有効なメールフォーマットを正規表現で検証する。
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  # 各カラムにバリデーションを追加する。
  # name: 空白でない 最大長20文字
  # email: 空白でない 最大長20文字 XXX@YYY.ZZZの形式 属性の値が重複しない
  validates :name,  presence: true, length: { maximum: 20 }
  validates :email, presence: true, length: { maximum: 20 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: true
end
