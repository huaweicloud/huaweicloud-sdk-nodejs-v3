import { AutopilotClusterInformation } from './AutopilotClusterInformation';


export class UpdateAutopilotClusterRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public body?: AutopilotClusterInformation;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdateAutopilotClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): UpdateAutopilotClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AutopilotClusterInformation): UpdateAutopilotClusterRequest {
        this['body'] = body;
        return this;
    }
}