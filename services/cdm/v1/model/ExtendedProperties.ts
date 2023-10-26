

export class ExtendedProperties {
    public workSpaceId?: string;
    public resourceId?: string;
    public trial?: string;
    public constructor() { 
    }
    public withWorkSpaceId(workSpaceId: string): ExtendedProperties {
        this['workSpaceId'] = workSpaceId;
        return this;
    }
    public withResourceId(resourceId: string): ExtendedProperties {
        this['resourceId'] = resourceId;
        return this;
    }
    public withTrial(trial: string): ExtendedProperties {
        this['trial'] = trial;
        return this;
    }
}