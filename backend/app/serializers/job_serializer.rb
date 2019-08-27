class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description
end
