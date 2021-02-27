class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :name
      t.belongs_to :art

      t.timestamps
    end
  end
end
