import { CreateDashboardGroupReq } from './CreateDashboardGroupReq';


export class CreateDashboardGroupRequest {
    private 'Content-Type'?: string;
    public body?: CreateDashboardGroupReq;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateDashboardGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateDashboardGroupReq): CreateDashboardGroupRequest {
        this['body'] = body;
        return this;
    }
}