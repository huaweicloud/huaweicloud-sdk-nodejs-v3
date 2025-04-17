import { BatchDeleteDashboardsRequestBody } from './BatchDeleteDashboardsRequestBody';


export class DeleteDashboardsRequest {
    public body?: BatchDeleteDashboardsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteDashboardsRequestBody): DeleteDashboardsRequest {
        this['body'] = body;
        return this;
    }
}