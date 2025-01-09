import { CreateDesktopPoolAuthorizedObjectsRequestBody } from './CreateDesktopPoolAuthorizedObjectsRequestBody';


export class CreateDesktopPoolAuthorizedObjectsRequest {
    private 'pool_id'?: string;
    public body?: CreateDesktopPoolAuthorizedObjectsRequestBody;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): CreateDesktopPoolAuthorizedObjectsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: CreateDesktopPoolAuthorizedObjectsRequestBody): CreateDesktopPoolAuthorizedObjectsRequest {
        this['body'] = body;
        return this;
    }
}