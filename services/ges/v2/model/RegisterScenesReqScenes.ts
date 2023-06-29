

export class RegisterScenesReqScenes {
    public name?: string;
    public applications?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): RegisterScenesReqScenes {
        this['name'] = name;
        return this;
    }
    public withApplications(applications: Array<string>): RegisterScenesReqScenes {
        this['applications'] = applications;
        return this;
    }
}