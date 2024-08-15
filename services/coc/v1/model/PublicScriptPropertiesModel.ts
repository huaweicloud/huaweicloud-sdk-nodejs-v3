

export class PublicScriptPropertiesModel {
    private 'risk_level'?: PublicScriptPropertiesModelRiskLevelEnum | string;
    public version?: string;
    public constructor(riskLevel?: string, version?: string) { 
        this['risk_level'] = riskLevel;
        this['version'] = version;
    }
    public withRiskLevel(riskLevel: PublicScriptPropertiesModelRiskLevelEnum | string): PublicScriptPropertiesModel {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: PublicScriptPropertiesModelRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): PublicScriptPropertiesModelRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withVersion(version: string): PublicScriptPropertiesModel {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicScriptPropertiesModelRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
