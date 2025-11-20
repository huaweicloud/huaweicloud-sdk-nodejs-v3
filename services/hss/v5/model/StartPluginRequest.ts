import { PluginControlRequestBody } from './PluginControlRequestBody';


export class StartPluginRequest {
    private 'enterprise_project_id'?: string;
    public body?: PluginControlRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StartPluginRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: PluginControlRequestBody): StartPluginRequest {
        this['body'] = body;
        return this;
    }
}