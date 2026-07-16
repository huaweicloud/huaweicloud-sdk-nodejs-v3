

export class DeleteTrainingExperimentRequest {
    private 'experiment_id'?: string;
    public constructor(experimentId?: string) { 
        this['experiment_id'] = experimentId;
    }
    public withExperimentId(experimentId: string): DeleteTrainingExperimentRequest {
        this['experiment_id'] = experimentId;
        return this;
    }
    public set experimentId(experimentId: string  | undefined) {
        this['experiment_id'] = experimentId;
    }
    public get experimentId(): string | undefined {
        return this['experiment_id'];
    }
}