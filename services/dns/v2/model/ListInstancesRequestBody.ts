

export class ListInstancesRequestBody {
    private 'dim_name'?: Array<string>;
    public ids?: Array<Array<string>>;
    public constructor(dimName?: Array<string>, ids?: Array<Array<string>>) { 
        this['dim_name'] = dimName;
        this['ids'] = ids;
    }
    public withDimName(dimName: Array<string>): ListInstancesRequestBody {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: Array<string>  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): Array<string> | undefined {
        return this['dim_name'];
    }
    public withIds(ids: Array<Array<string>>): ListInstancesRequestBody {
        this['ids'] = ids;
        return this;
    }
}