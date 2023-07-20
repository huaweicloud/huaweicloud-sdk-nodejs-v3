import { ImportFlinkJobRequestBody } from './ImportFlinkJobRequestBody';


export class ImportFlinkJobRequest {
    public body?: ImportFlinkJobRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportFlinkJobRequestBody): ImportFlinkJobRequest {
        this['body'] = body;
        return this;
    }
}