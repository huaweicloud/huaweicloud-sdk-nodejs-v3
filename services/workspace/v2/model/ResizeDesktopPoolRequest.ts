import { ResizeDesktopPoolReq } from './ResizeDesktopPoolReq';


export class ResizeDesktopPoolRequest {
    private 'pool_id'?: string;
    public body?: ResizeDesktopPoolReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ResizeDesktopPoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: ResizeDesktopPoolReq): ResizeDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}