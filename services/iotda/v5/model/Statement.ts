

export class Statement {
    public effect?: string;
    public actions?: Array<string>;
    public resources?: Array<string>;
    public constructor(effect?: string, actions?: Array<string>, resources?: Array<string>) { 
        this['effect'] = effect;
        this['actions'] = actions;
        this['resources'] = resources;
    }
    public withEffect(effect: string): Statement {
        this['effect'] = effect;
        return this;
    }
    public withActions(actions: Array<string>): Statement {
        this['actions'] = actions;
        return this;
    }
    public withResources(resources: Array<string>): Statement {
        this['resources'] = resources;
        return this;
    }
}