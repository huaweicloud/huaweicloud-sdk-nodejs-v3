

export class ShowAutoSearchParamAnalysisResultPathRequest {
    private 'parameter_name'?: string;
    private 'training_job_id'?: string;
    public constructor(parameterName?: string, trainingJobId?: string) { 
        this['parameter_name'] = parameterName;
        this['training_job_id'] = trainingJobId;
    }
    public withParameterName(parameterName: string): ShowAutoSearchParamAnalysisResultPathRequest {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withTrainingJobId(trainingJobId: string): ShowAutoSearchParamAnalysisResultPathRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
}