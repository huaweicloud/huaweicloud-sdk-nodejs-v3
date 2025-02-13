

export class ShowApplicationRequest {
    private 'application_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public constructor(applicationId?: string, xEnvironmentID?: string) { 
        this['application_id'] = applicationId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withApplicationId(applicationId: string): ShowApplicationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ShowApplicationRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): ShowApplicationRequest {
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