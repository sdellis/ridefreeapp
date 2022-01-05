require "rails_helper"
# binding.pry
RSpec.describe Api::V1::RidesController, :type => :request do

  let(:valid_attributes) do
        { :pickup_address => "Test pickup!", :dropoff_address => "Test dropoff!", :pickup_datetime => "2022-01-29T15:01:39.880Z" }
  end

  before(:each) do
    Ride.create! valid_attributes
  end

  it "should get index" do
    get api_v1_rides_url, as: :json
    assert_response :success
  end

  it "should create ride" do
    assert_difference('Ride.count') do
      post api_v1_rides_path, params: valid_attributes, as: :json
    end

    assert_response 201
  end

  it "should show ride" do
    get api_v1_ride_url(Ride.last), as: :json
    assert_response :success
  end

  it "should update ride" do
    patch api_v1_ride_url(Ride.last), params: valid_attributes, as: :json
    assert_response 200
  end

  it "should destroy ride" do
    assert_difference('Ride.count', -1) do
      delete api_v1_ride_url(Ride.last), as: :json
    end

    assert_response 204
  end

end
