import { DashPackageItem } from './DashPackageItem';
import { HlsPackageItem } from './HlsPackageItem';
import { MssPackageItem } from './MssPackageItem';


export class EndpointItem {
    private 'hls_package'?: Array<HlsPackageItem>;
    private 'dash_package'?: Array<DashPackageItem>;
    private 'mss_package'?: Array<MssPackageItem>;
    public constructor() { 
    }
    public withHlsPackage(hlsPackage: Array<HlsPackageItem>): EndpointItem {
        this['hls_package'] = hlsPackage;
        return this;
    }
    public set hlsPackage(hlsPackage: Array<HlsPackageItem>  | undefined) {
        this['hls_package'] = hlsPackage;
    }
    public get hlsPackage(): Array<HlsPackageItem> | undefined {
        return this['hls_package'];
    }
    public withDashPackage(dashPackage: Array<DashPackageItem>): EndpointItem {
        this['dash_package'] = dashPackage;
        return this;
    }
    public set dashPackage(dashPackage: Array<DashPackageItem>  | undefined) {
        this['dash_package'] = dashPackage;
    }
    public get dashPackage(): Array<DashPackageItem> | undefined {
        return this['dash_package'];
    }
    public withMssPackage(mssPackage: Array<MssPackageItem>): EndpointItem {
        this['mss_package'] = mssPackage;
        return this;
    }
    public set mssPackage(mssPackage: Array<MssPackageItem>  | undefined) {
        this['mss_package'] = mssPackage;
    }
    public get mssPackage(): Array<MssPackageItem> | undefined {
        return this['mss_package'];
    }
}