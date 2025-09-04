import { ListUserConnectionReq } from './ListUserConnectionReq';


export class ExportUserConnectionRequest {
    public body?: ListUserConnectionReq;
    public constructor() { 
    }
    public withBody(body: ListUserConnectionReq): ExportUserConnectionRequest {
        this['body'] = body;
        return this;
    }
}