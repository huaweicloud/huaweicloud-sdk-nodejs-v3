import { DisassociateBandwidthPackage } from './DisassociateBandwidthPackage';


export class DisassociateBandwidthPackageRequestBody {
    private 'bandwidth_package'?: DisassociateBandwidthPackage;
    public constructor(bandwidthPackage?: DisassociateBandwidthPackage) { 
        this['bandwidth_package'] = bandwidthPackage;
    }
    public withBandwidthPackage(bandwidthPackage: DisassociateBandwidthPackage): DisassociateBandwidthPackageRequestBody {
        this['bandwidth_package'] = bandwidthPackage;
        return this;
    }
    public set bandwidthPackage(bandwidthPackage: DisassociateBandwidthPackage  | undefined) {
        this['bandwidth_package'] = bandwidthPackage;
    }
    public get bandwidthPackage(): DisassociateBandwidthPackage | undefined {
        return this['bandwidth_package'];
    }
}