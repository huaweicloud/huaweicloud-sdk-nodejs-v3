

export class DeleteShipperRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteShipperRequestBody {
        this['ids'] = ids;
        return this;
    }
}