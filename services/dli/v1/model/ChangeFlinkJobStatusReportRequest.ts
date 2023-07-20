import { IefFlinkJobStatusReportReq } from './IefFlinkJobStatusReportReq';


export class ChangeFlinkJobStatusReportRequest {
    public body?: IefFlinkJobStatusReportReq;
    public constructor() { 
    }
    public withBody(body: IefFlinkJobStatusReportReq): ChangeFlinkJobStatusReportRequest {
        this['body'] = body;
        return this;
    }
}