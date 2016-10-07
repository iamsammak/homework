class Cat < ActiveRecord::Base
  # has_many :toys
  include Toyable
end
