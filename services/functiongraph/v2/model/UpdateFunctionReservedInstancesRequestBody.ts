

export class UpdateFunctionReservedInstancesRequestBody {
    public count: number;
    public constructor(count?: any) { 
        this['count'] = count;
    }
    public withCount(count: number): UpdateFunctionReservedInstancesRequestBody {
        this['count'] = count;
        return this;
    }
}