import { ImportFlinkJobsRequestBody } from './ImportFlinkJobsRequestBody';


export class ImportFlinkJobsRequest {
    public body?: ImportFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportFlinkJobsRequestBody): ImportFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}