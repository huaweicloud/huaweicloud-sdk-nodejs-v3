import { ImportFlinkJobRequestBody } from './ImportFlinkJobRequestBody';


export class ImportFlinkJobsRequest {
    public body?: ImportFlinkJobRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportFlinkJobRequestBody): ImportFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}