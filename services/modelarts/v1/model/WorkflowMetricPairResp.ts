

export class WorkflowMetricPairResp {
    public key?: string;
    public value?: object;
    public constructor() { 
    }
    public withKey(key: string): WorkflowMetricPairResp {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): WorkflowMetricPairResp {
        this['value'] = value;
        return this;
    }
}