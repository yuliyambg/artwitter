class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_art, only: [:index, :show, :update, :destroy]

  # GET /art/:id/comments
  def index
    @comments = @art.comments

    render json: @comments
  end

  # GET /comments/1
#   def show
#     render json: @comment
#   end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
#   def update
#     if @comment.update(comment_params)
#       render json: @comment
#     else
#       render json: @comment.errors, status: :unprocessable_entity
#     end
#   end

  # DELETE /comments/1
#   def destroy
#     @comment.destroy
#   end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :name, :art_id)
    end

    def set_art
      @art = Art.find(params[:art_id])
    end


end
