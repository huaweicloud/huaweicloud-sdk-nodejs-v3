

export class BandwidthPackageId {
    private 'bandwidth_package_id'?: string;
    public constructor(bandwidthPackageId?: string) { 
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public withBandwidthPackageId(bandwidthPackageId: string): BandwidthPackageId {
        this['bandwidth_package_id'] = bandwidthPackageId;
        return this;
    }
    public set bandwidthPackageId(bandwidthPackageId: string  | undefined) {
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public get bandwidthPackageId(): string | undefined {
        return this['bandwidth_package_id'];
    }
}