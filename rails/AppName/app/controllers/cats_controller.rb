class CatsController < ApplicationController

  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new

  end

  def edit
  end

  def create
  end

  def update
  end

  private

  def cat_params
    params.require(:cats).permit()
  end
end
