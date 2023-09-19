import { CreateBandwidthPackage } from './CreateBandwidthPackage';


export class CreateBandwidthPackageRequestBody {
    private 'bandwidth_package'?: CreateBandwidthPackage;
    public constructor(bandwidthPackage?: CreateBandwidthPackage) { 
        this['bandwidth_package'] = bandwidthPackage;
    }
    public withBandwidthPackage(bandwidthPackage: CreateBandwidthPackage): CreateBandwidthPackageRequestBody {
        this['bandwidth_package'] = bandwidthPackage;
        return this;
    }
    public set bandwidthPackage(bandwidthPackage: CreateBandwidthPackage  | undefined) {
        this['bandwidth_package'] = bandwidthPackage;
    }
    public get bandwidthPackage(): CreateBandwidthPackage | undefined {
        return this['bandwidth_package'];
    }
}