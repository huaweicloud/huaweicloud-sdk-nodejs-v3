import { UpdatePtrReq } from './UpdatePtrReq';


export class UpdatePtrRecordRequest {
    public region: string;
    private 'floatingip_id': string | undefined;
    public body?: UpdatePtrReq;
    public constructor(region?: any, floatingipId?: any) { 
        this['region'] = region;
        this['floatingip_id'] = floatingipId;
    }
    public withRegion(region: string): UpdatePtrRecordRequest {
        this['region'] = region;
        return this;
    }
    public withFloatingipId(floatingipId: string): UpdatePtrRecordRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId() {
        return this['floatingip_id'];
    }
    public withBody(body: UpdatePtrReq): UpdatePtrRecordRequest {
        this['body'] = body;
        return this;
    }
}