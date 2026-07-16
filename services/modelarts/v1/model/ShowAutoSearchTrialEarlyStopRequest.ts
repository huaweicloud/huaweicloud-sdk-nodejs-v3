

export class ShowAutoSearchTrialEarlyStopRequest {
    private 'training_job_id'?: string;
    private 'trial_id'?: string;
    public constructor(trainingJobId?: string, trialId?: string) { 
        this['training_job_id'] = trainingJobId;
        this['trial_id'] = trialId;
    }
    public withTrainingJobId(trainingJobId: string): ShowAutoSearchTrialEarlyStopRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withTrialId(trialId: string): ShowAutoSearchTrialEarlyStopRequest {
        this['trial_id'] = trialId;
        return this;
    }
    public set trialId(trialId: string  | undefined) {
        this['trial_id'] = trialId;
    }
    public get trialId(): string | undefined {
        return this['trial_id'];
    }
}