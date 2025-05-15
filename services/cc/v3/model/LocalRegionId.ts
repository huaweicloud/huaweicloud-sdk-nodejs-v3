

export class LocalRegionId {
    private 'local_region_id'?: string;
    public constructor(localRegionId?: string) { 
        this['local_region_id'] = localRegionId;
    }
    public withLocalRegionId(localRegionId: string): LocalRegionId {
        this['local_region_id'] = localRegionId;
        return this;
    }
    public set localRegionId(localRegionId: string  | undefined) {
        this['local_region_id'] = localRegionId;
    }
    public get localRegionId(): string | undefined {
        return this['local_region_id'];
    }
}