class Art < ApplicationRecord
  has_many :comments
  validates :title, presence:true
  validates :artist_name, presence:true
  validates :image_url, presence:true

end
