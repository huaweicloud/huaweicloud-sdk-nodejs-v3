

export class ListNotificationTopicsRequest {
    public offset: number;
    public limit: number;
    private 'Content-Type': string | undefined;
    public constructor(offset?: any, limit?: any, contentType?: any) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['Content-Type'] = contentType;
    }
    public withOffset(offset: number): ListNotificationTopicsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationTopicsRequest {
        this['limit'] = limit;
        return this;
    }
    public withContentType(contentType: string): ListNotificationTopicsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}