

export class CreateDataobjectRelationsRequestBody {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): CreateDataobjectRelationsRequestBody {
        this['ids'] = ids;
        return this;
    }
}