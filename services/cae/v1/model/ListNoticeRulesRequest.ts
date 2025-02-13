

export class ListNoticeRulesRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public constructor(xEnvironmentID?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListNoticeRulesRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): ListNoticeRulesRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
}