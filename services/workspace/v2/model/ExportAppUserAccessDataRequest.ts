import { ExportAppUserAccessDataRequestBody } from './ExportAppUserAccessDataRequestBody';


export class ExportAppUserAccessDataRequest {
    public body?: ExportAppUserAccessDataRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportAppUserAccessDataRequestBody): ExportAppUserAccessDataRequest {
        this['body'] = body;
        return this;
    }
}