import { BandwidthPackageLineSpecCode } from './BandwidthPackageLineSpecCode';


export class BandwidthPackageLine {
    private 'local_region_id'?: string;
    private 'remote_region_id'?: string;
    private 'local_site_code'?: string;
    private 'remote_site_code'?: string;
    private 'support_levels'?: Array<string>;
    private 'spec_codes'?: Array<BandwidthPackageLineSpecCode>;
    public constructor() { 
    }
    public withLocalRegionId(localRegionId: string): BandwidthPackageLine {
        this['local_region_id'] = localRegionId;
        return this;
    }
    public set localRegionId(localRegionId: string  | undefined) {
        this['local_region_id'] = localRegionId;
    }
    public get localRegionId(): string | undefined {
        return this['local_region_id'];
    }
    public withRemoteRegionId(remoteRegionId: string): BandwidthPackageLine {
        this['remote_region_id'] = remoteRegionId;
        return this;
    }
    public set remoteRegionId(remoteRegionId: string  | undefined) {
        this['remote_region_id'] = remoteRegionId;
    }
    public get remoteRegionId(): string | undefined {
        return this['remote_region_id'];
    }
    public withLocalSiteCode(localSiteCode: string): BandwidthPackageLine {
        this['local_site_code'] = localSiteCode;
        return this;
    }
    public set localSiteCode(localSiteCode: string  | undefined) {
        this['local_site_code'] = localSiteCode;
    }
    public get localSiteCode(): string | undefined {
        return this['local_site_code'];
    }
    public withRemoteSiteCode(remoteSiteCode: string): BandwidthPackageLine {
        this['remote_site_code'] = remoteSiteCode;
        return this;
    }
    public set remoteSiteCode(remoteSiteCode: string  | undefined) {
        this['remote_site_code'] = remoteSiteCode;
    }
    public get remoteSiteCode(): string | undefined {
        return this['remote_site_code'];
    }
    public withSupportLevels(supportLevels: Array<string>): BandwidthPackageLine {
        this['support_levels'] = supportLevels;
        return this;
    }
    public set supportLevels(supportLevels: Array<string>  | undefined) {
        this['support_levels'] = supportLevels;
    }
    public get supportLevels(): Array<string> | undefined {
        return this['support_levels'];
    }
    public withSpecCodes(specCodes: Array<BandwidthPackageLineSpecCode>): BandwidthPackageLine {
        this['spec_codes'] = specCodes;
        return this;
    }
    public set specCodes(specCodes: Array<BandwidthPackageLineSpecCode>  | undefined) {
        this['spec_codes'] = specCodes;
    }
    public get specCodes(): Array<BandwidthPackageLineSpecCode> | undefined {
        return this['spec_codes'];
    }
}