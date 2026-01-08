

export class ImportIpInfo {
    private 'number'?: string;
    private 'ip_address'?: string;
    private 'subnet_mask'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): ImportIpInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIpAddress(ipAddress: string): ImportIpInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSubnetMask(subnetMask: string): ImportIpInfo {
        this['subnet_mask'] = subnetMask;
        return this;
    }
    public set subnetMask(subnetMask: string  | undefined) {
        this['subnet_mask'] = subnetMask;
    }
    public get subnetMask(): string | undefined {
        return this['subnet_mask'];
    }
    public withErrorCode(errorCode: string): ImportIpInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}