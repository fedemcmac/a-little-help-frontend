class Api::JobsController < ApplicationController

    def create
        job = Job.create(post_params)
        # job.user = @current_user
        job.save
        # if job.valid?
            render json: { job: JobSerializer.new(job) }, status: :created
        # else
        #     render json: { errors: job.errors.full_messages }, status: :not_accepted
        # end
    end

    def index
        render json: Job.all
    end

    def show
        job = Job.find(params[:id])
        render json: { job: FullJobSerializer.new(job) }
    end

    private

    def post_params
        params.require(:job).permit(:user_id, :title, :summary, :description )
    end

end
