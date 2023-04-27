import { CreateDashboardGroupReq } from './CreateDashboardGroupReq';


export class CreateDashboardGroupRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateDashboardGroupReq;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateDashboardGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateDashboardGroupReq): CreateDashboardGroupRequest {
        this['body'] = body;
        return this;
    }
}