

export class GenerateAuditlogDownloadLinkRequest {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): GenerateAuditlogDownloadLinkRequest {
        this['ids'] = ids;
        return this;
    }
}