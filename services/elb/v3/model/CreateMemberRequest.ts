import { CreateMemberRequestBody } from './CreateMemberRequestBody';


export class CreateMemberRequest {
    private 'pool_id': string | undefined;
    public body?: CreateMemberRequestBody;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): CreateMemberRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: CreateMemberRequestBody): CreateMemberRequest {
        this['body'] = body;
        return this;
    }
}