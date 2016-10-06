class CreateCatRentalRequests < ActiveRecord::Migration
  def change
    create_table :cat_rental_requests do |t|
      t.integer :cat_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
      add_index :cat_rental_requests, :cat_id
    add_index :cat_rental_requests, :user_id
  end
end
