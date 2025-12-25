import { ShowShipperAuthorizeResponseBodyDataData } from './ShowShipperAuthorizeResponseBodyDataData';


export class ShowShipperAuthorizeResponseBodyData {
    public data?: Array<ShowShipperAuthorizeResponseBodyDataData>;
    public limit?: number;
    public offset?: number;
    public total?: number;
    public constructor() { 
    }
    public withData(data: Array<ShowShipperAuthorizeResponseBodyDataData>): ShowShipperAuthorizeResponseBodyData {
        this['data'] = data;
        return this;
    }
    public withLimit(limit: number): ShowShipperAuthorizeResponseBodyData {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowShipperAuthorizeResponseBodyData {
        this['offset'] = offset;
        return this;
    }
    public withTotal(total: number): ShowShipperAuthorizeResponseBodyData {
        this['total'] = total;
        return this;
    }
}