import { ExpandDesktopPoolVolumesReq } from './ExpandDesktopPoolVolumesReq';


export class ExpandDesktopPoolVolumesRequest {
    private 'pool_id'?: string;
    public body?: ExpandDesktopPoolVolumesReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ExpandDesktopPoolVolumesRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: ExpandDesktopPoolVolumesReq): ExpandDesktopPoolVolumesRequest {
        this['body'] = body;
        return this;
    }
}