

export class SetKernelPluginLicenseRequestBody {
    private 'license_str'?: string;
    public constructor(licenseStr?: string) { 
        this['license_str'] = licenseStr;
    }
    public withLicenseStr(licenseStr: string): SetKernelPluginLicenseRequestBody {
        this['license_str'] = licenseStr;
        return this;
    }
    public set licenseStr(licenseStr: string  | undefined) {
        this['license_str'] = licenseStr;
    }
    public get licenseStr(): string | undefined {
        return this['license_str'];
    }
}