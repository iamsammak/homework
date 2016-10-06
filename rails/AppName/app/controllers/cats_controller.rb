class CatsController < ApplicationController

  def index
  end

  def show
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
