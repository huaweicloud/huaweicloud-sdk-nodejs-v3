

export class ObsPolicyStatement {
    public effect?: string;
    public action?: Array<string>;
    public resource?: Array<string>;
    public constructor() { 
    }
    public withEffect(effect: string): ObsPolicyStatement {
        this['effect'] = effect;
        return this;
    }
    public withAction(action: Array<string>): ObsPolicyStatement {
        this['action'] = action;
        return this;
    }
    public withResource(resource: Array<string>): ObsPolicyStatement {
        this['resource'] = resource;
        return this;
    }
}