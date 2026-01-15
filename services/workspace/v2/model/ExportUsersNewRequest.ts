import { ExportUsersNewReq } from './ExportUsersNewReq';


export class ExportUsersNewRequest {
    public body?: ExportUsersNewReq;
    public constructor() { 
    }
    public withBody(body: ExportUsersNewReq): ExportUsersNewRequest {
        this['body'] = body;
        return this;
    }
}