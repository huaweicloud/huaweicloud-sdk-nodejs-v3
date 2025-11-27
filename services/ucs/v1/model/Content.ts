

export class Content {
    public verbs?: Array<string>;
    public resources?: Array<string>;
    public constructor() { 
    }
    public withVerbs(verbs: Array<string>): Content {
        this['verbs'] = verbs;
        return this;
    }
    public withResources(resources: Array<string>): Content {
        this['resources'] = resources;
        return this;
    }
}