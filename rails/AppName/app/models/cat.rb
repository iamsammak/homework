# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  birth_date  :date             not null
#  sex         :string(1)        not null
#  color       :string           not null
#  description :text
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'action_view'
class Cat < ActiveRecord::Base
  include ActionView::Helpers::DateHelper

  CAT_COLORS = %w(black white orange brown spotted beige)

  belongs_to :owner, class_name: :User, foreign_key: :user_id

  has_many :rental_requests, class_name: :CatRentalRequest, dependent: :destroy

  validates :birth_date, :color, :name, :sex, :user_id, presence: true

  validates :color, inclusion: CAT_COLORS
  validates :sex, inclusion: %w(M F)
  validate :birth_date_in_the_past

  def age
    time_ago_in_words(birth_date)
  end

  private
  def birth_date_in_the_past
    if birth_date && birth_date > Time.now
      errors[:birth_date] << 'must be in the past'
    end
  end
end
