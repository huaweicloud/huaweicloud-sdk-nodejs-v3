

export class NodePoolRepairPolicy {
    public enable?: boolean;
    public policy?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): NodePoolRepairPolicy {
        this['enable'] = enable;
        return this;
    }
    public withPolicy(policy: string): NodePoolRepairPolicy {
        this['policy'] = policy;
        return this;
    }
}