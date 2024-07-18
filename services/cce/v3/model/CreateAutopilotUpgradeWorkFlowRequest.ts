import { CreateUpgradeWorkFlowRequestBody } from './CreateUpgradeWorkFlowRequestBody';


export class CreateAutopilotUpgradeWorkFlowRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public body?: CreateUpgradeWorkFlowRequestBody;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): CreateAutopilotUpgradeWorkFlowRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): CreateAutopilotUpgradeWorkFlowRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateUpgradeWorkFlowRequestBody): CreateAutopilotUpgradeWorkFlowRequest {
        this['body'] = body;
        return this;
    }
}