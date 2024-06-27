import { CreateFirewallReq } from './CreateFirewallReq';


export class CreateFirewallRequest {
    private 'project_id'?: string;
    private 'X-Client-Token'?: string;
    public body?: CreateFirewallReq;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateFirewallRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withXClientToken(xClientToken: string): CreateFirewallRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateFirewallReq): CreateFirewallRequest {
        this['body'] = body;
        return this;
    }
}