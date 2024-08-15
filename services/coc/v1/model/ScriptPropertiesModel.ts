import { ReviewerInfo } from './ReviewerInfo';


export class ScriptPropertiesModel {
    private 'risk_level'?: ScriptPropertiesModelRiskLevelEnum | string;
    public version?: string;
    public reviewers?: Array<ReviewerInfo>;
    public protocol?: ScriptPropertiesModelProtocolEnum | string;
    public constructor(riskLevel?: string, version?: string) { 
        this['risk_level'] = riskLevel;
        this['version'] = version;
    }
    public withRiskLevel(riskLevel: ScriptPropertiesModelRiskLevelEnum | string): ScriptPropertiesModel {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ScriptPropertiesModelRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ScriptPropertiesModelRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withVersion(version: string): ScriptPropertiesModel {
        this['version'] = version;
        return this;
    }
    public withReviewers(reviewers: Array<ReviewerInfo>): ScriptPropertiesModel {
        this['reviewers'] = reviewers;
        return this;
    }
    public withProtocol(protocol: ScriptPropertiesModelProtocolEnum | string): ScriptPropertiesModel {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptPropertiesModelRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
/**
    * @export
    * @enum {string}
    */
export enum ScriptPropertiesModelProtocolEnum {
    DEFAULT = 'DEFAULT',
    SMS = 'SMS',
    EMAIL = 'EMAIL',
    DING_TALK = 'DING_TALK',
    WE_LINK = 'WE_LINK',
    WECHAT = 'WECHAT',
    CALLNOTIFY = 'CALLNOTIFY',
    NOT_TO_NOTIFY = 'NOT_TO_NOTIFY'
}
