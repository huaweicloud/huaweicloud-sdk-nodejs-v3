import { AssociateBandwidthPackage } from './AssociateBandwidthPackage';


export class AssociateBandwidthPackageRequestBody {
    private 'bandwidth_package'?: AssociateBandwidthPackage;
    public constructor(bandwidthPackage?: AssociateBandwidthPackage) { 
        this['bandwidth_package'] = bandwidthPackage;
    }
    public withBandwidthPackage(bandwidthPackage: AssociateBandwidthPackage): AssociateBandwidthPackageRequestBody {
        this['bandwidth_package'] = bandwidthPackage;
        return this;
    }
    public set bandwidthPackage(bandwidthPackage: AssociateBandwidthPackage  | undefined) {
        this['bandwidth_package'] = bandwidthPackage;
    }
    public get bandwidthPackage(): AssociateBandwidthPackage | undefined {
        return this['bandwidth_package'];
    }
}