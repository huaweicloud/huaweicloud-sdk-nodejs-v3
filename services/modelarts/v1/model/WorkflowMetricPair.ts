

export class WorkflowMetricPair {
    public key?: string;
    public value?: object;
    public constructor() { 
    }
    public withKey(key: string): WorkflowMetricPair {
        this['key'] = key;
        return this;
    }
    public withValue(value: object): WorkflowMetricPair {
        this['value'] = value;
        return this;
    }
}