

export class ListCertificatesRequest {
    private 'Instance-Id'?: string | undefined;
    private 'app_id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListCertificatesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListCertificatesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withLimit(limit: number): ListCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCertificatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListCertificatesRequest {
        this['offset'] = offset;
        return this;
    }
}