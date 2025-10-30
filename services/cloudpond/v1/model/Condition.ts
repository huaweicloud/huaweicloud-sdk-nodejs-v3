

export class Condition {
    public environment?: number;
    public space?: number;
    public transport?: number;
    public installation?: ConditionInstallationEnum | string;
    public constructor() { 
    }
    public withEnvironment(environment: number): Condition {
        this['environment'] = environment;
        return this;
    }
    public withSpace(space: number): Condition {
        this['space'] = space;
        return this;
    }
    public withTransport(transport: number): Condition {
        this['transport'] = transport;
        return this;
    }
    public withInstallation(installation: ConditionInstallationEnum | string): Condition {
        this['installation'] = installation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConditionInstallationEnum {
    UNCLEAR = 'UNCLEAR',
    UNSUPPORT = 'UNSUPPORT',
    SUPPORT = 'SUPPORT'
}
