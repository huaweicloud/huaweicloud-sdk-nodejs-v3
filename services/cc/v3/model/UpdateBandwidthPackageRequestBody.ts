import { UpdateBandwidthPackage } from './UpdateBandwidthPackage';


export class UpdateBandwidthPackageRequestBody {
    private 'bandwidth_package'?: UpdateBandwidthPackage;
    public constructor(bandwidthPackage?: UpdateBandwidthPackage) { 
        this['bandwidth_package'] = bandwidthPackage;
    }
    public withBandwidthPackage(bandwidthPackage: UpdateBandwidthPackage): UpdateBandwidthPackageRequestBody {
        this['bandwidth_package'] = bandwidthPackage;
        return this;
    }
    public set bandwidthPackage(bandwidthPackage: UpdateBandwidthPackage  | undefined) {
        this['bandwidth_package'] = bandwidthPackage;
    }
    public get bandwidthPackage(): UpdateBandwidthPackage | undefined {
        return this['bandwidth_package'];
    }
}