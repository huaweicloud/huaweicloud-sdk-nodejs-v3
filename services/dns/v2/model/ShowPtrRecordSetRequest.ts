

export class ShowPtrRecordSetRequest {
    public region?: string;
    private 'floatingip_id'?: string;
    public constructor(region?: string, floatingipId?: string) { 
        this['region'] = region;
        this['floatingip_id'] = floatingipId;
    }
    public withRegion(region: string): ShowPtrRecordSetRequest {
        this['region'] = region;
        return this;
    }
    public withFloatingipId(floatingipId: string): ShowPtrRecordSetRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string  | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId(): string | undefined {
        return this['floatingip_id'];
    }
}