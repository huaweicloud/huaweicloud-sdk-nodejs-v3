

export class WorkflowStepMetric {
    private 'created_at'?: string;
    public key?: string;
    public title?: string;
    public type?: string;
    public data?: { [key: string]: object; };
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): WorkflowStepMetric {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withKey(key: string): WorkflowStepMetric {
        this['key'] = key;
        return this;
    }
    public withTitle(title: string): WorkflowStepMetric {
        this['title'] = title;
        return this;
    }
    public withType(type: string): WorkflowStepMetric {
        this['type'] = type;
        return this;
    }
    public withData(data: { [key: string]: object; }): WorkflowStepMetric {
        this['data'] = data;
        return this;
    }
}