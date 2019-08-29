class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :description
end
