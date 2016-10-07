class Corgi < ActiveRecord::Base
  # has_many :toys
  include Toyable
end
