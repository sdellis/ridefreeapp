FactoryBot.define do
  factory :ride do
    pickup_address { Faker::Ride.pickup_address }
    dropoff_address { Faker::Ride.dropoff_address }
    pickup_datetime { Faker::Ride.pickup_datetime }
    notes { Faker::Lorem.paragraph }
    claimed { false }
  end
end
