import { CreatePtrReq } from './CreatePtrReq';


export class CreateEipRecordSetRequest {
    public region?: string;
    private 'floatingip_id'?: string;
    public body?: CreatePtrReq;
    public constructor(region?: string, floatingipId?: string) { 
        this['region'] = region;
        this['floatingip_id'] = floatingipId;
    }
    public withRegion(region: string): CreateEipRecordSetRequest {
        this['region'] = region;
        return this;
    }
    public withFloatingipId(floatingipId: string): CreateEipRecordSetRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string  | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId(): string | undefined {
        return this['floatingip_id'];
    }
    public withBody(body: CreatePtrReq): CreateEipRecordSetRequest {
        this['body'] = body;
        return this;
    }
}