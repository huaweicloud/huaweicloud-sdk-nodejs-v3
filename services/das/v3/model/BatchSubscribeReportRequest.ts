import { BatchSubscribeReportRequestBody } from './BatchSubscribeReportRequestBody';


export class BatchSubscribeReportRequest {
    public body?: BatchSubscribeReportRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSubscribeReportRequestBody): BatchSubscribeReportRequest {
        this['body'] = body;
        return this;
    }
}