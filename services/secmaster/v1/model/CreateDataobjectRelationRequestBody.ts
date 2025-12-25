

export class CreateDataobjectRelationRequestBody {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): CreateDataobjectRelationRequestBody {
        this['ids'] = ids;
        return this;
    }
}