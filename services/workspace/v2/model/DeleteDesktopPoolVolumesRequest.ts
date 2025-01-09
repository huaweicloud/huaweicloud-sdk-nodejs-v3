import { DeleteDesktopPoolVolumesReq } from './DeleteDesktopPoolVolumesReq';


export class DeleteDesktopPoolVolumesRequest {
    private 'pool_id'?: string;
    public body?: DeleteDesktopPoolVolumesReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): DeleteDesktopPoolVolumesRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: DeleteDesktopPoolVolumesReq): DeleteDesktopPoolVolumesRequest {
        this['body'] = body;
        return this;
    }
}