

export class AvailableFlavorInfoResult {
    private 'spec_code'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor() { 
    }
    public withSpecCode(specCode: string): AvailableFlavorInfoResult {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withVcpus(vcpus: string): AvailableFlavorInfoResult {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): AvailableFlavorInfoResult {
        this['ram'] = ram;
        return this;
    }
    public withAzStatus(azStatus: { [key: string]: string; }): AvailableFlavorInfoResult {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
}