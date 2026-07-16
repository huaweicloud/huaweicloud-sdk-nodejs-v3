

export class ShowAutoSearchTrialsRequest {
    private 'training_job_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(trainingJobId?: string) { 
        this['training_job_id'] = trainingJobId;
    }
    public withTrainingJobId(trainingJobId: string): ShowAutoSearchTrialsRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withLimit(limit: number): ShowAutoSearchTrialsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAutoSearchTrialsRequest {
        this['offset'] = offset;
        return this;
    }
}