import { ChannelCreateReq } from './ChannelCreateReq';


export class CreateChannelRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChannelCreateReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateChannelRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChannelCreateReq): CreateChannelRequest {
        this['body'] = body;
        return this;
    }
}