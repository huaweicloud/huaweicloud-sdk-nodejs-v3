

export class BareMetalModifyPortRequest {
    private 'subnet_id'?: string;
    private 'device_owner'?: string;
    private 'ip_addresses'?: Array<string>;
    private 'reverse_binding'?: Array<boolean>;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): BareMetalModifyPortRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDeviceOwner(deviceOwner: string): BareMetalModifyPortRequest {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withIpAddresses(ipAddresses: Array<string>): BareMetalModifyPortRequest {
        this['ip_addresses'] = ipAddresses;
        return this;
    }
    public set ipAddresses(ipAddresses: Array<string>  | undefined) {
        this['ip_addresses'] = ipAddresses;
    }
    public get ipAddresses(): Array<string> | undefined {
        return this['ip_addresses'];
    }
    public withReverseBinding(reverseBinding: Array<boolean>): BareMetalModifyPortRequest {
        this['reverse_binding'] = reverseBinding;
        return this;
    }
    public set reverseBinding(reverseBinding: Array<boolean>  | undefined) {
        this['reverse_binding'] = reverseBinding;
    }
    public get reverseBinding(): Array<boolean> | undefined {
        return this['reverse_binding'];
    }
}