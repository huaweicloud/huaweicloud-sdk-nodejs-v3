import { UpgradeWorkFlowUpdateRequestBody } from './UpgradeWorkFlowUpdateRequestBody';


export class UpgradeAutopilotWorkFlowUpdateRequest {
    private 'cluster_id'?: string;
    private 'upgrade_workflow_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpgradeWorkFlowUpdateRequestBody;
    public constructor(clusterId?: string, upgradeWorkflowId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['upgrade_workflow_id'] = upgradeWorkflowId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpgradeAutopilotWorkFlowUpdateRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withUpgradeWorkflowId(upgradeWorkflowId: string): UpgradeAutopilotWorkFlowUpdateRequest {
        this['upgrade_workflow_id'] = upgradeWorkflowId;
        return this;
    }
    public set upgradeWorkflowId(upgradeWorkflowId: string  | undefined) {
        this['upgrade_workflow_id'] = upgradeWorkflowId;
    }
    public get upgradeWorkflowId(): string | undefined {
        return this['upgrade_workflow_id'];
    }
    public withContentType(contentType: string): UpgradeAutopilotWorkFlowUpdateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpgradeWorkFlowUpdateRequestBody): UpgradeAutopilotWorkFlowUpdateRequest {
        this['body'] = body;
        return this;
    }
}