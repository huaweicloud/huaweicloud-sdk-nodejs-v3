import { CreateAlertRuleSimulationRequestBody } from './CreateAlertRuleSimulationRequestBody';


export class CreateAlertRuleSimulationRequest {
    private 'workspace_id'?: string;
    public body?: CreateAlertRuleSimulationRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateAlertRuleSimulationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateAlertRuleSimulationRequestBody): CreateAlertRuleSimulationRequest {
        this['body'] = body;
        return this;
    }
}