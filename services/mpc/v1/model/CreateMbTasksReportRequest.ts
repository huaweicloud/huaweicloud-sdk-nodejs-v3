import { MbTasksReportReq } from './MbTasksReportReq';


export class CreateMbTasksReportRequest {
    public body?: MbTasksReportReq;
    public constructor() { 
    }
    public withBody(body: MbTasksReportReq): CreateMbTasksReportRequest {
        this['body'] = body;
        return this;
    }
}