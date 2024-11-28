

export class ListLivePlatformsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public offset?: number;
    public limit?: number;
    private 'access_type'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListLivePlatformsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListLivePlatformsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListLivePlatformsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withOffset(offset: number): ListLivePlatformsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLivePlatformsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAccessType(accessType: string): ListLivePlatformsRequest {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): string | undefined {
        return this['access_type'];
    }
}