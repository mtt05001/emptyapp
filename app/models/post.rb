class Post < ActiveRecord::Base
  attr_accessible :author, :title
  # validate :title, :length =>{ :maximum => 140}
end
