

export class WorkflowConsume {
    public period?: string;
    public value?: number;
    public constructor() { 
    }
    public withPeriod(period: string): WorkflowConsume {
        this['period'] = period;
        return this;
    }
    public withValue(value: number): WorkflowConsume {
        this['value'] = value;
        return this;
    }
}