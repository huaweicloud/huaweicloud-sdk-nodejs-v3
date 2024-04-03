import { TextCompletionReq } from './TextCompletionReq';


export class ExecuteTextCompletionRequest {
    private 'pool_id'?: string;
    private 'deployment_id'?: string;
    public body?: TextCompletionReq;
    public constructor(poolId?: string, deploymentId?: string) { 
        this['pool_id'] = poolId;
        this['deployment_id'] = deploymentId;
    }
    public withPoolId(poolId: string): ExecuteTextCompletionRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
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