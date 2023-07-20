

export class ComputeFlavor {
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'region_status'?: string;
    public constructor(vcpus?: string, ram?: string, specCode?: string, azStatus?: { [key: string]: string; }, regionStatus?: string) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['az_status'] = azStatus;
        this['region_status'] = regionStatus;
    }
    public withVcpus(vcpus: string): ComputeFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ComputeFlavor {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): ComputeFlavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): ComputeFlavor {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withRegionStatus(regionStatus: string): ComputeFlavor {
        this['region_status'] = regionStatus;
        return this;
    }
    public set regionStatus(regionStatus: string  | undefined) {
        this['region_status'] = regionStatus;
    }
    public get regionStatus(): string | undefined {
        return this['region_status'];
    }
}