class User < ApplicationRecord
    has_secure_password
    has_many :jobs
    alias_attribute :created_jobs, :jobs
    has_many :user_jobs
    has_many :helping_jobs, through: :user_jobs, source: :job
end
