import { AttachDesktopPoolUserReq } from './AttachDesktopPoolUserReq';


export class AttachDesktopPoolUserRequest {
    private 'pool_id'?: string;
    public body?: AttachDesktopPoolUserReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): AttachDesktopPoolUserRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: AttachDesktopPoolUserReq): AttachDesktopPoolUserRequest {
        this['body'] = body;
        return this;
    }
}