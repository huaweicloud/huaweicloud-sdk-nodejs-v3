

export class ListFtArtifactsRequest {
    private 'training_job_id'?: string;
    public steps?: number;
    public epoch?: number;
    public loss?: number;
    public status?: string;
    private 'order_by_create_time_asc'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): ListFtArtifactsRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withSteps(steps: number): ListFtArtifactsRequest {
        this['steps'] = steps;
        return this;
    }
    public withEpoch(epoch: number): ListFtArtifactsRequest {
        this['epoch'] = epoch;
        return this;
    }
    public withLoss(loss: number): ListFtArtifactsRequest {
        this['loss'] = loss;
        return this;
    }
    public withStatus(status: string): ListFtArtifactsRequest {
        this['status'] = status;
        return this;
    }
    public withOrderByCreateTimeAsc(orderByCreateTimeAsc: boolean): ListFtArtifactsRequest {
        this['order_by_create_time_asc'] = orderByCreateTimeAsc;
        return this;
    }
    public set orderByCreateTimeAsc(orderByCreateTimeAsc: boolean  | undefined) {
        this['order_by_create_time_asc'] = orderByCreateTimeAsc;
    }
    public get orderByCreateTimeAsc(): boolean | undefined {
        return this['order_by_create_time_asc'];
    }
    public withLimit(limit: number): ListFtArtifactsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFtArtifactsRequest {
        this['offset'] = offset;
        return this;
    }
}