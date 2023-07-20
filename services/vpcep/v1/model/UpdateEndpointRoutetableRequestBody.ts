

export class UpdateEndpointRoutetableRequestBody {
    public routetables?: Array<string>;
    public constructor(routetables?: Array<string>) { 
        this['routetables'] = routetables;
    }
    public withRoutetables(routetables: Array<string>): UpdateEndpointRoutetableRequestBody {
        this['routetables'] = routetables;
        return this;
    }
}