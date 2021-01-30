

export class KeystoneShowRegionRequest {
    private 'region_id': string | undefined;
    public constructor(regionId: any) { 
        this['region_id'] = regionId;
    }
    public withRegionId(regionId: string): KeystoneShowRegionRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
}