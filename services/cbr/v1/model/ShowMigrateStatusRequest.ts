

export class ShowMigrateStatusRequest {
    private 'all_regions'?: boolean;
    public constructor() { 
    }
    public withAllRegions(allRegions: boolean): ShowMigrateStatusRequest {
        this['all_regions'] = allRegions;
        return this;
    }
    public set allRegions(allRegions: boolean  | undefined) {
        this['all_regions'] = allRegions;
    }
    public get allRegions(): boolean | undefined {
        return this['all_regions'];
    }
}