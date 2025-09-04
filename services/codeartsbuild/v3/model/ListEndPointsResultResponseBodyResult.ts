import { EndPointResponse } from './EndPointResponse';


export class ListEndPointsResultResponseBodyResult {
    public endpoints?: Array<EndPointResponse>;
    public total?: number;
    public constructor() { 
    }
    public withEndpoints(endpoints: Array<EndPointResponse>): ListEndPointsResultResponseBodyResult {
        this['endpoints'] = endpoints;
        return this;
    }
    public withTotal(total: number): ListEndPointsResultResponseBodyResult {
        this['total'] = total;
        return this;
    }
}