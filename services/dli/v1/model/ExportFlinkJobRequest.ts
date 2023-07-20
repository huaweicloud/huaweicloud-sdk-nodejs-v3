import { ExportFlinkJobRequestBody } from './ExportFlinkJobRequestBody';


export class ExportFlinkJobRequest {
    public body?: ExportFlinkJobRequestBody;
    public constructor() { 
    }
    public withBody(body: ExportFlinkJobRequestBody): ExportFlinkJobRequest {
        this['body'] = body;
        return this;
    }
}