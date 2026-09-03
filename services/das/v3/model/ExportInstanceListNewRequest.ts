import { ExportInstanceListNewRequestBody } from './ExportInstanceListNewRequestBody';


export class ExportInstanceListNewRequest {
    public body?: ExportInstanceListNewRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportInstanceListNewRequestBody): ExportInstanceListNewRequest {
        this['body'] = body;
        return this;
    }
}