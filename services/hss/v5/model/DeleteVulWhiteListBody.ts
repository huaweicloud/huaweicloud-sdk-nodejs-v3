

export class DeleteVulWhiteListBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteVulWhiteListBody {
        this['ids'] = ids;
        return this;
    }
}