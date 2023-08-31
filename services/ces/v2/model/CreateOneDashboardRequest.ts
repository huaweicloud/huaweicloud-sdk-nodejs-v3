import { CreateDashboardRequestBody } from './CreateDashboardRequestBody';


export class CreateOneDashboardRequest {
    public body?: CreateDashboardRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDashboardRequestBody): CreateOneDashboardRequest {
        this['body'] = body;
        return this;
    }
}