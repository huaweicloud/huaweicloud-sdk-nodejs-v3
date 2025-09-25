

export class DeleteImageWhiteListsRequestBody {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): DeleteImageWhiteListsRequestBody {
        this['ids'] = ids;
        return this;
    }
}