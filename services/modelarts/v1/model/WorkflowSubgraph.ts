

export class WorkflowSubgraph {
    public name?: string;
    public steps?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): WorkflowSubgraph {
        this['name'] = name;
        return this;
    }
    public withSteps(steps: Array<string>): WorkflowSubgraph {
        this['steps'] = steps;
        return this;
    }
}