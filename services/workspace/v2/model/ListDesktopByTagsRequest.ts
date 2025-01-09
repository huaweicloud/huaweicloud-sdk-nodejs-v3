import { QueryDesktopByTagReq } from './QueryDesktopByTagReq';


export class ListDesktopByTagsRequest {
    public body?: QueryDesktopByTagReq;
    public constructor() { 
    }
    public withBody(body: QueryDesktopByTagReq): ListDesktopByTagsRequest {
        this['body'] = body;
        return this;
    }
}