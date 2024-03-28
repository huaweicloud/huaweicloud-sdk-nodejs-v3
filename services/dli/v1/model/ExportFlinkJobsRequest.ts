import { ExportFlinkJobsRequestBody } from './ExportFlinkJobsRequestBody';


export class ExportFlinkJobsRequest {
    public body?: ExportFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportFlinkJobsRequestBody): ExportFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}