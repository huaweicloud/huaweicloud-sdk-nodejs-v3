

export class JobScriptOrderListProp {
    private 'region_ids'?: string;
    public constructor() { 
    }
    public withRegionIds(regionIds: string): JobScriptOrderListProp {
        this['region_ids'] = regionIds;
        return this;
    }
    public set regionIds(regionIds: string  | undefined) {
        this['region_ids'] = regionIds;
    }
    public get regionIds(): string | undefined {
        return this['region_ids'];
    }
}