import { BatchDeleteDashboardRequestBody } from './BatchDeleteDashboardRequestBody';


export class DeleteDashboardsRequest {
    public body?: BatchDeleteDashboardRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteDashboardRequestBody): DeleteDashboardsRequest {
        this['body'] = body;
        return this;
    }
}