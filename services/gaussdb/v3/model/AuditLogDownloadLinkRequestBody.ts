

export class AuditLogDownloadLinkRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): AuditLogDownloadLinkRequestBody {
        this['ids'] = ids;
        return this;
    }
}