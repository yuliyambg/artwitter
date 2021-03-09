class Comment < ApplicationRecord
  belongs_to :art

  validates :content, presence:true
  validates :name, presence:true
end
