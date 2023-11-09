

export class SchedulerAffinity {
    public az?: Array<string>;
    public node?: Array<string>;
    public application?: Array<string>;
    public constructor() { 
    }
    public withAz(az: Array<string>): SchedulerAffinity {
        this['az'] = az;
        return this;
    }
    public withNode(node: Array<string>): SchedulerAffinity {
        this['node'] = node;
        return this;
    }
    public withApplication(application: Array<string>): SchedulerAffinity {
        this['application'] = application;
        return this;
    }
}