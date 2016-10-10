# == Schema Information
#
# Table name: subs
#
#  id           :integer          not null, primary key
#  moderator_id :integer          not null
#  name         :string           not null
#  description  :text             not null
#  created_at   :datetime
#  updated_at   :datetime
#

require 'rails_helper'

RSpec.describe Sub, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
