

export class ShowRecordingDetailRequest {
    public confUUID?: string;
    public userUUID?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(confUUID?: string) { 
        this['confUUID'] = confUUID;
    }
    public withConfUUID(confUUID: string): ShowRecordingDetailRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withUserUUID(userUUID: string): ShowRecordingDetailRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): ShowRecordingDetailRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): ShowRecordingDetailRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
}