

export class UpdateRunbookRequestBody {
    public name?: string;
    public content?: string;
    public description?: string;
    private 'risk_level'?: UpdateRunbookRequestBodyRiskLevelEnum | string;
    public constructor(name?: string, content?: string) { 
        this['name'] = name;
        this['content'] = content;
    }
    public withName(name: string): UpdateRunbookRequestBody {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): UpdateRunbookRequestBody {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): UpdateRunbookRequestBody {
        this['description'] = description;
        return this;
    }
    public withRiskLevel(riskLevel: UpdateRunbookRequestBodyRiskLevelEnum | string): UpdateRunbookRequestBody {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: UpdateRunbookRequestBodyRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): UpdateRunbookRequestBodyRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRunbookRequestBodyRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
