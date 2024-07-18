import { AutopilotCluster } from './AutopilotCluster';


export class CreateAutopilotClusterRequest {
    private 'Content-Type'?: string;
    public body?: AutopilotCluster;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAutopilotClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AutopilotCluster): CreateAutopilotClusterRequest {
        this['body'] = body;
        return this;
    }
}