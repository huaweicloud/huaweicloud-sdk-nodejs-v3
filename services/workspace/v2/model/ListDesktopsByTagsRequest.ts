import { QueryDesktopByTagReq } from './QueryDesktopByTagReq';


export class ListDesktopsByTagsRequest {
    public body?: QueryDesktopByTagReq;
    public constructor() { 
    }
    public withBody(body: QueryDesktopByTagReq): ListDesktopsByTagsRequest {
        this['body'] = body;
        return this;
    }
}