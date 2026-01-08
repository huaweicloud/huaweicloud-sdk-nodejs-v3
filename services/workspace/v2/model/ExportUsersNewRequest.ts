import { ExportUsersV3Req } from './ExportUsersV3Req';


export class ExportUsersNewRequest {
    public body?: ExportUsersV3Req;
    public constructor() { 
    }
    public withBody(body: ExportUsersV3Req): ExportUsersNewRequest {
        this['body'] = body;
        return this;
    }
}