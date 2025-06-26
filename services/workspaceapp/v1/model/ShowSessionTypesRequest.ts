import { QuerySessionTypesReq } from './QuerySessionTypesReq';


export class ShowSessionTypesRequest {
    public body?: QuerySessionTypesReq;
    public constructor() { 
    }
    public withBody(body: QuerySessionTypesReq): ShowSessionTypesRequest {
        this['body'] = body;
        return this;
    }
}