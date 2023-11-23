import { ExportFlinkJobRequestBody } from './ExportFlinkJobRequestBody';


export class ExportFlinkJobsRequest {
    public body?: ExportFlinkJobRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportFlinkJobRequestBody): ExportFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}