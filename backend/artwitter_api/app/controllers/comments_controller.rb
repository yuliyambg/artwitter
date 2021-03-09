class CommentsController < ApplicationController
#   before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_art, only: [:index]

  # GET /arts/:id/comments
  def index
    @comments = @art.comments

    render json: @comments
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end


  private
#     def set_comment
#       @comment = Comment.find(params[:id])
#     end

    def set_art
      @art = Art.find(params[:art_id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :name, :art_id)
    end


end
