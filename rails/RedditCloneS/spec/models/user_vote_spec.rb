# == Schema Information
#
# Table name: user_votes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  value      :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

require 'rails_helper'

RSpec.describe UserVote, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
