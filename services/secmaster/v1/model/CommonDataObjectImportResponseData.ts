

export class CommonDataObjectImportResponseData {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): CommonDataObjectImportResponseData {
        this['ids'] = ids;
        return this;
    }
}