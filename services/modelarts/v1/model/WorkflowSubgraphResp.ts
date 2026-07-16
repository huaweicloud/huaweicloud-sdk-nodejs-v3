

export class WorkflowSubgraphResp {
    public name?: string;
    public steps?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): WorkflowSubgraphResp {
        this['name'] = name;
        return this;
    }
    public withSteps(steps: Array<string>): WorkflowSubgraphResp {
        this['steps'] = steps;
        return this;
    }
}