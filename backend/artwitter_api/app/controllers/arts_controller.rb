class ArtsController < ApplicationController
#   before_action :set_art, only: [:show, :update, :destroy]

  # GET /arts
  def index
    @arts = Art.all

    render json: @arts
  end

  # POST /arts
  def create
    @art = Art.new(art_params)

    if @art.save
      render json: @art, status: :created, location: @art
    else
      render json: @art.errors, status: :unprocessable_entity
    end
  end


  private
#     def set_art
#       @art = Art.find(params[:id])
#     end

    # Only allow a trusted parameter "white list" through.
    def art_params
      params.require(:art).permit(:title, :artist_name, :image_url)
    end
end
