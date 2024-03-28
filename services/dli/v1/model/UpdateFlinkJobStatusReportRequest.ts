import { ChangeFlinkJobStatusReportRequestBody } from './ChangeFlinkJobStatusReportRequestBody';


export class UpdateFlinkJobStatusReportRequest {
    public body?: ChangeFlinkJobStatusReportRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeFlinkJobStatusReportRequestBody): UpdateFlinkJobStatusReportRequest {
        this['body'] = body;
        return this;
    }
}