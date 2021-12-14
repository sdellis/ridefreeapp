class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.string :pickup_address
      t.string :dropoff_address
      t.string :pickup_datetime
      t.string :datetime
      t.string :notes

      t.timestamps
    end
  end
end
