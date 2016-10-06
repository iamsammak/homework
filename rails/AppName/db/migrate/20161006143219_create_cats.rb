class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.date :birth_date, null: false
      t.string :sex, null: false, limit: 1
      t.string :color, null: false
      t.text :description
      t.integer :user_id

      t.timestamps null: false
    end
    add_index :cats, :user_id
  end
end
