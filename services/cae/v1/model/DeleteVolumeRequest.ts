

export class DeleteVolumeRequest {
    public id?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public constructor(id?: string, xEnvironmentID?: string) { 
        this['id'] = id;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withId(id: string): DeleteVolumeRequest {
        this['id'] = id;
        return this;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteVolumeRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): DeleteVolumeRequest {
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