import { UpdatePoolRequestBody } from './UpdatePoolRequestBody';


export class UpdatePoolRequest {
    private 'pool_id': string | undefined;
    public body?: UpdatePoolRequestBody;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): UpdatePoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: UpdatePoolRequestBody): UpdatePoolRequest {
        this['body'] = body;
        return this;
    }
}