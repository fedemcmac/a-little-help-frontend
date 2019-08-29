class FullUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :created_jobs
  has_many :helping_jobs
end
