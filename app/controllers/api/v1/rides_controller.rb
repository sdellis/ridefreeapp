class Api::V1::RidesController < ApplicationController
  before_action :set_ride, only: [:show, :update, :destroy]

  # GET /rides
  def index
    @rides = Ride.all
    limit = params[:limit]

    if limit.present?
      limit = limit.to_i
      @rides = @todos.last(limit)
    end

    render json: @rides.reverse
  end

  # GET /rides/1
  def show
    render json: @ride
  end

  # POST /rides
  def create
    @ride = Ride.new(ride_params)

    if @ride.save
      render json: @ride, status: :created, location: api_v1_rides_path(@ride)
    else
      render json: @ride.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rides/1
  def update
    if @ride.update(ride_params)
      render json: @ride
    else
      render json: @ride.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rides/1
  def destroy
    @ride.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ride
      @ride = Ride.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ride_params
      params.require(:ride).permit(:id, :pickup_address, :dropoff_address, :pickup_datetime, :datetime, :notes, :claimed)
    end
end
