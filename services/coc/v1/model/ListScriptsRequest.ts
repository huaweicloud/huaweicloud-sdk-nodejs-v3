

export class ListScriptsRequest {
    public limit?: number;
    public marker?: number;
    private 'name_like'?: string;
    public creator?: string;
    private 'risk_level'?: ListScriptsRequestRiskLevelEnum | string;
    public type?: ListScriptsRequestTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withLimit(limit: number): ListScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): ListScriptsRequest {
        this['marker'] = marker;
        return this;
    }
    public withNameLike(nameLike: string): ListScriptsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withCreator(creator: string): ListScriptsRequest {
        this['creator'] = creator;
        return this;
    }
    public withRiskLevel(riskLevel: ListScriptsRequestRiskLevelEnum | string): ListScriptsRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ListScriptsRequestRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ListScriptsRequestRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withType(type: ListScriptsRequestTypeEnum | string): ListScriptsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListScriptsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withXLanguage(xLanguage: string): ListScriptsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): ListScriptsRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): ListScriptsRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScriptsRequestRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScriptsRequestTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
