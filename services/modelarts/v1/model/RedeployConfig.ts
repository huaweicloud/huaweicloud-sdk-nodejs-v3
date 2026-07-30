

export class RedeployConfig {
    public type?: RedeployConfigTypeEnum | string;
    public autoFlow?: RedeployConfigAutoFlowEnum | string;
    public constructor() { 
    }
    public withType(type: RedeployConfigTypeEnum | string): RedeployConfig {
        this['type'] = type;
        return this;
    }
    public withAutoFlow(autoFlow: RedeployConfigAutoFlowEnum | string): RedeployConfig {
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
/**
    * @export
    * @enum {string}
    */
export enum RedeployConfigAutoFlowEnum {
    TRUE = 'true',
    FALSE = 'false'
}
