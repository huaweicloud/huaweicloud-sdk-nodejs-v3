

export class ResourceConfiguration {
    public resource?: string;
    public actions?: Array<string>;
    public constructor(resource?: string, actions?: Array<string>) { 
        this['resource'] = resource;
        this['actions'] = actions;
    }
    public withResource(resource: string): ResourceConfiguration {
        this['resource'] = resource;
        return this;
    }
    public withActions(actions: Array<string>): ResourceConfiguration {
        this['actions'] = actions;
        return this;
    }
}