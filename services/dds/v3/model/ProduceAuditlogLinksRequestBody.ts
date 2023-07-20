

export class ProduceAuditlogLinksRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): ProduceAuditlogLinksRequestBody {
        this['ids'] = ids;
        return this;
    }
}