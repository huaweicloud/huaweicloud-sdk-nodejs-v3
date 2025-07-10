import { RebuildDesktopPoolReq } from './RebuildDesktopPoolReq';


export class RebuildDesktopPoolRequest {
    private 'pool_id'?: string;
    public body?: RebuildDesktopPoolReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): RebuildDesktopPoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: RebuildDesktopPoolReq): RebuildDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}