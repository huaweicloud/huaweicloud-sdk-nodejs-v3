

export class DeregisterScenesReqScenes {
    public name?: string;
    public applications?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): DeregisterScenesReqScenes {
        this['name'] = name;
        return this;
    }
    public withApplications(applications: Array<string>): DeregisterScenesReqScenes {
        this['applications'] = applications;
        return this;
    }
}