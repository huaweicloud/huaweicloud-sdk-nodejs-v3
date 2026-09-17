import { ExportFullSqlRequestBody } from './ExportFullSqlRequestBody';


export class ExportFullSqlRequest {
    public body?: ExportFullSqlRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportFullSqlRequestBody): ExportFullSqlRequest {
        this['body'] = body;
        return this;
    }
}