

export class DeleteEnvironmentRequest {
    private 'environment_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public constructor(environmentId?: string) { 
        this['environment_id'] = environmentId;
    }
    public withEnvironmentId(environmentId: string): DeleteEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteEnvironmentRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
}