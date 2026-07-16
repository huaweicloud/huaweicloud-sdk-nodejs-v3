

export class WorkflowSchedulePolicies {
    private 'on_failure'?: string;
    private 'on_running'?: string;
    public constructor() { 
    }
    public withOnFailure(onFailure: string): WorkflowSchedulePolicies {
        this['on_failure'] = onFailure;
        return this;
    }
    public set onFailure(onFailure: string  | undefined) {
        this['on_failure'] = onFailure;
    }
    public get onFailure(): string | undefined {
        return this['on_failure'];
    }
    public withOnRunning(onRunning: string): WorkflowSchedulePolicies {
        this['on_running'] = onRunning;
        return this;
    }
    public set onRunning(onRunning: string  | undefined) {
        this['on_running'] = onRunning;
    }
    public get onRunning(): string | undefined {
        return this['on_running'];
    }
}