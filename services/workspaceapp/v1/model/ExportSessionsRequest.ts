import { ExportSessionsReq } from './ExportSessionsReq';


export class ExportSessionsRequest {
    public body?: ExportSessionsReq;
    public constructor() { 
    }
    public withBody(body: ExportSessionsReq): ExportSessionsRequest {
        this['body'] = body;
        return this;
    }
}