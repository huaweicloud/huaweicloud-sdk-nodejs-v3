import { TextCompletionReq } from './TextCompletionReq';


export class ExecuteTextCompletionRequest {
    private 'deployment_id'?: string;
    public body?: TextCompletionReq;
    public constructor(deploymentId?: string) { 
        this['deployment_id'] = deploymentId;
    }
    public withDeploymentId(deploymentId: string): ExecuteTextCompletionRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withBody(body: TextCompletionReq): ExecuteTextCompletionRequest {
        this['body'] = body;
        return this;
    }
}