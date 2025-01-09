import { ListUsedDesktopInfoReq } from './ListUsedDesktopInfoReq';


export class ListUsedDesktopInfoRequest {
    public body?: ListUsedDesktopInfoReq;
    public constructor() { 
    }
    public withBody(body: ListUsedDesktopInfoReq): ListUsedDesktopInfoRequest {
        this['body'] = body;
        return this;
    }
}