import { PluginControlRequestBody } from './PluginControlRequestBody';


export class StopPluginRequest {
    private 'enterprise_project_id'?: string;
    public body?: PluginControlRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): StopPluginRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: PluginControlRequestBody): StopPluginRequest {
        this['body'] = body;
        return this;
    }
}