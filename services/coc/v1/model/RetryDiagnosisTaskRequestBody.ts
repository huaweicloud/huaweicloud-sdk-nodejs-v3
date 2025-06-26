

export class RetryDiagnosisTaskRequestBody {
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): RetryDiagnosisTaskRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}