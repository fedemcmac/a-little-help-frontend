class FullJobSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :description
  belongs_to :owner
  has_many :helpers
end
