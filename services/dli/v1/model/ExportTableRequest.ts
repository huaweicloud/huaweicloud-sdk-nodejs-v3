import { ExportTableRequestBody } from './ExportTableRequestBody';


export class ExportTableRequest {
    public body?: ExportTableRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportTableRequestBody): ExportTableRequest {
        this['body'] = body;
        return this;
    }
}