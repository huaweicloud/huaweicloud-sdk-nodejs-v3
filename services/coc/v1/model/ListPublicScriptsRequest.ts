

export class ListPublicScriptsRequest {
    public limit?: number;
    public marker?: number;
    private 'name_like'?: string;
    public name?: string;
    private 'risk_level'?: ListPublicScriptsRequestRiskLevelEnum | string;
    public type?: ListPublicScriptsRequestTypeEnum | string;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withLimit(limit: number): ListPublicScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): ListPublicScriptsRequest {
        this['marker'] = marker;
        return this;
    }
    public withNameLike(nameLike: string): ListPublicScriptsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withName(name: string): ListPublicScriptsRequest {
        this['name'] = name;
        return this;
    }
    public withRiskLevel(riskLevel: ListPublicScriptsRequestRiskLevelEnum | string): ListPublicScriptsRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ListPublicScriptsRequestRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ListPublicScriptsRequestRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withType(type: ListPublicScriptsRequestTypeEnum | string): ListPublicScriptsRequest {
        this['type'] = type;
        return this;
    }
    public withXLanguage(xLanguage: string): ListPublicScriptsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): ListPublicScriptsRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): ListPublicScriptsRequest {
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
export enum ListPublicScriptsRequestRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPublicScriptsRequestTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
