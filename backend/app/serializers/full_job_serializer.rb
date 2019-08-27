class FullJobSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description
  belongs_to :owner
  has_many :helpers

end
