import { BusinessTopoRequest } from './BusinessTopoRequest';


export class SearchBusinessTopologyRequest {
    private 'x-business-id'?: number;
    public body?: BusinessTopoRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchBusinessTopologyRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: BusinessTopoRequest): SearchBusinessTopologyRequest {
        this['body'] = body;
        return this;
    }
}