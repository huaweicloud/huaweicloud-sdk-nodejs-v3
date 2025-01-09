import { DesktopPoolActionReq } from './DesktopPoolActionReq';


export class ExecuteDesktopPoolActionRequest {
    private 'pool_id'?: string;
    public body?: DesktopPoolActionReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ExecuteDesktopPoolActionRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: DesktopPoolActionReq): ExecuteDesktopPoolActionRequest {
        this['body'] = body;
        return this;
    }
}