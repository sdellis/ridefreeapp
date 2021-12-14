class AddClaimedColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :claimed, :boolean, default: false
  end
end
