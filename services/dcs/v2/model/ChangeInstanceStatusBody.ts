

export class ChangeInstanceStatusBody {
    public instances?: Array<string>;
    public action?: string;
    public constructor() { 
    }
    public withInstances(instances: Array<string>): ChangeInstanceStatusBody {
        this['instances'] = instances;
        return this;
    }
    public withAction(action: string): ChangeInstanceStatusBody {
        this['action'] = action;
        return this;
    }
}