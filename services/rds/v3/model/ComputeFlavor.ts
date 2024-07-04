

export class ComputeFlavor {
    public id?: string;
    public code?: string;
    public vcpus?: string;
    public ram?: string;
    private 'az_status'?: { [key: string]: string; };
    public constructor(id?: string, code?: string, vcpus?: string, ram?: string, azStatus?: { [key: string]: string; }) { 
        this['id'] = id;
        this['code'] = code;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['az_status'] = azStatus;
    }
    public withId(id: string): ComputeFlavor {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): ComputeFlavor {
        this['code'] = code;
        return this;
    }
    public withVcpus(vcpus: string): ComputeFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ComputeFlavor {
        this['ram'] = ram;
        return this;
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
}