import { ExpandDesktopPoolReq } from './ExpandDesktopPoolReq';


export class ExpandDesktopPoolRequest {
    private 'pool_id'?: string;
    public body?: ExpandDesktopPoolReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ExpandDesktopPoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: ExpandDesktopPoolReq): ExpandDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}