

export class DeleteRecordingsRequest {
    public confUUIDs: string;
    public userUUID?: string;
    private 'X-Authorization-Type'?: string | undefined;
    private 'X-Site-Id'?: string | undefined;
    public constructor(confUUIDs?: any) { 
        this['confUUIDs'] = confUUIDs;
    }
    public withConfUUIDs(confUUIDs: string): DeleteRecordingsRequest {
        this['confUUIDs'] = confUUIDs;
        return this;
    }
    public withUserUUID(userUUID: string): DeleteRecordingsRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): DeleteRecordingsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): DeleteRecordingsRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
}