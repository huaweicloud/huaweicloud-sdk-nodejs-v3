import { AddDesktopPoolVolumesReq } from './AddDesktopPoolVolumesReq';


export class AddDesktopPoolVolumesRequest {
    private 'pool_id'?: string;
    public body?: AddDesktopPoolVolumesReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): AddDesktopPoolVolumesRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: AddDesktopPoolVolumesReq): AddDesktopPoolVolumesRequest {
        this['body'] = body;
        return this;
    }
}