import { ListAppConnectionReq } from './ListAppConnectionReq';


export class ExportAppConnectionRequest {
    public body?: ListAppConnectionReq;
    public constructor() { 
    }
    public withBody(body: ListAppConnectionReq): ExportAppConnectionRequest {
        this['body'] = body;
        return this;
    }
}