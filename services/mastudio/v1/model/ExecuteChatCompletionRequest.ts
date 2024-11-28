import { ChatCompletionReq } from './ChatCompletionReq';


export class ExecuteChatCompletionRequest {
    private 'deployment_id'?: string;
    public body?: ChatCompletionReq;
    public constructor(deploymentId?: string) { 
        this['deployment_id'] = deploymentId;
    }
    public withDeploymentId(deploymentId: string): ExecuteChatCompletionRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withBody(body: ChatCompletionReq): ExecuteChatCompletionRequest {
        this['body'] = body;
        return this;
    }
}