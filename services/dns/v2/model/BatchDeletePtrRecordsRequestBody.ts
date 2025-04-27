

export class BatchDeletePtrRecordsRequestBody {
    private 'floatingip_ids'?: Array<string>;
    public constructor() { 
    }
    public withFloatingipIds(floatingipIds: Array<string>): BatchDeletePtrRecordsRequestBody {
        this['floatingip_ids'] = floatingipIds;
        return this;
    }
    public set floatingipIds(floatingipIds: Array<string>  | undefined) {
        this['floatingip_ids'] = floatingipIds;
    }
    public get floatingipIds(): Array<string> | undefined {
        return this['floatingip_ids'];
    }
}