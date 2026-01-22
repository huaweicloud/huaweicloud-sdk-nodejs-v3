import { CreateFirewallReq } from './CreateFirewallReq';


export class CreateFirewallRequest {
    private 'project_id'?: string;
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
    public withBody(body: CreateFirewallReq): CreateFirewallRequest {
        this['body'] = body;
        return this;
    }
}