# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  body              :text             not null
#  parent_comment_id :integer
#  post_id           :integer          not null
#  user_id           :integer          not null
#  created_at        :datetime
#  updated_at        :datetime
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
