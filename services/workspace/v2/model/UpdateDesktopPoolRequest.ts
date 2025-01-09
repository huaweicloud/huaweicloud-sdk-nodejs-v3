import { UpdateDesktopPoolAttributesReq } from './UpdateDesktopPoolAttributesReq';


export class UpdateDesktopPoolRequest {
    private 'pool_id'?: string;
    public body?: UpdateDesktopPoolAttributesReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): UpdateDesktopPoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: UpdateDesktopPoolAttributesReq): UpdateDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}