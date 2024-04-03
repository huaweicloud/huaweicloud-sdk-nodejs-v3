import { ChatCompletionReq } from './ChatCompletionReq';


export class ExecuteChatCompletionRequest {
    private 'pool_id'?: string;
    private 'deployment_id'?: string;
    public body?: ChatCompletionReq;
    public constructor(poolId?: string, deploymentId?: string) { 
        this['pool_id'] = poolId;
        this['deployment_id'] = deploymentId;
    }
    public withPoolId(poolId: string): ExecuteChatCompletionRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
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