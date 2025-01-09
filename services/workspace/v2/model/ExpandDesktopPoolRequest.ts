import { ExpandDesktopPoolReq } from './ExpandDesktopPoolReq';


export class ExpandDesktopPoolRequest {
    private 'Service-Transaction-Id'?: string;
    private 'pool_id'?: string;
    public body?: ExpandDesktopPoolReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withServiceTransactionId(serviceTransactionId: string): ExpandDesktopPoolRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
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