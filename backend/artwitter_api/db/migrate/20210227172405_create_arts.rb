class CreateArts < ActiveRecord::Migration[6.0]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :artist_name
      t.string :image_url

      t.timestamps
    end
  end
end
