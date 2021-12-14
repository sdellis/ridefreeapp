require "test_helper"

class RidesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ride = rides(:one)
  end

  test "should get index" do
    get rides_url, as: :json
    assert_response :success
  end

  test "should create ride" do
    assert_difference('Ride.count') do
      post rides_url, params: { ride: { datetime: @ride.datetime, dropoff_address: @ride.dropoff_address, notes: @ride.notes, pickup_address: @ride.pickup_address, pickup_datetime: @ride.pickup_datetime } }, as: :json
    end

    assert_response 201
  end

  test "should show ride" do
    get ride_url(@ride), as: :json
    assert_response :success
  end

  test "should update ride" do
    patch ride_url(@ride), params: { ride: { datetime: @ride.datetime, dropoff_address: @ride.dropoff_address, notes: @ride.notes, pickup_address: @ride.pickup_address, pickup_datetime: @ride.pickup_datetime } }, as: :json
    assert_response 200
  end

  test "should destroy ride" do
    assert_difference('Ride.count', -1) do
      delete ride_url(@ride), as: :json
    end

    assert_response 204
  end
end
