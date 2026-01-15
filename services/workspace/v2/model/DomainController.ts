

export class DomainController {
    private 'dc_ip'?: string;
    private 'dc_name'?: string;
    public constructor(dcIp?: string, dcName?: string) { 
        this['dc_ip'] = dcIp;
        this['dc_name'] = dcName;
    }
    public withDcIp(dcIp: string): DomainController {
        this['dc_ip'] = dcIp;
        return this;
    }
    public set dcIp(dcIp: string  | undefined) {
        this['dc_ip'] = dcIp;
    }
    public get dcIp(): string | undefined {
        return this['dc_ip'];
    }
    public withDcName(dcName: string): DomainController {
        this['dc_name'] = dcName;
        return this;
    }
    public set dcName(dcName: string  | undefined) {
        this['dc_name'] = dcName;
    }
    public get dcName(): string | undefined {
        return this['dc_name'];
    }
}