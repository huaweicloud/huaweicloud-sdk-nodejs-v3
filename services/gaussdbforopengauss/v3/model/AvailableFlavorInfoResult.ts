

export class AvailableFlavorInfoResult {
    private 'spec_cpde'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor() { 
    }
    public withSpecCpde(specCpde: string): AvailableFlavorInfoResult {
        this['spec_cpde'] = specCpde;
        return this;
    }
    public set specCpde(specCpde: string  | undefined) {
        this['spec_cpde'] = specCpde;
    }
    public get specCpde(): string | undefined {
        return this['spec_cpde'];
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