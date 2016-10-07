class CreateToys < ActiveRecord::Migration
  def change
    create_table :toys do |t|
      t.string :name, null: false
      t.integer :toyable_id
      t.string :toyable_type

      t.refernces :toyable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
