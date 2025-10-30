

export class UpdateCondition {
    public environment?: number;
    public space?: number;
    public transport?: number;
    public installation?: UpdateConditionInstallationEnum | string;
    public constructor() { 
    }
    public withEnvironment(environment: number): UpdateCondition {
        this['environment'] = environment;
        return this;
    }
    public withSpace(space: number): UpdateCondition {
        this['space'] = space;
        return this;
    }
    public withTransport(transport: number): UpdateCondition {
        this['transport'] = transport;
        return this;
    }
    public withInstallation(installation: UpdateConditionInstallationEnum | string): UpdateCondition {
        this['installation'] = installation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateConditionInstallationEnum {
    UNCLEAR = 'UNCLEAR',
    UNSUPPORT = 'UNSUPPORT',
    SUPPORT = 'SUPPORT'
}
