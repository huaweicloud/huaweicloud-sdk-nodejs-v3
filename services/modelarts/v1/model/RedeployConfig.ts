

export class RedeployConfig {
    public type?: RedeployConfigTypeEnum | string;
    public autoFlow?: boolean;
    public constructor() { 
    }
    public withType(type: RedeployConfigTypeEnum | string): RedeployConfig {
        this['type'] = type;
        return this;
    }
    public withAutoFlow(autoFlow: boolean): RedeployConfig {
        this['autoFlow'] = autoFlow;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RedeployConfigTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
