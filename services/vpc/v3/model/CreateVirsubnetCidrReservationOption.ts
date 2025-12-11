

export class CreateVirsubnetCidrReservationOption {
    private 'virsubnet_id'?: string;
    private 'ip_version'?: number;
    public cidr?: string;
    public mask?: number;
    public name?: string;
    public description?: string;
    public constructor(virsubnetId?: string, ipVersion?: number) { 
        this['virsubnet_id'] = virsubnetId;
        this['ip_version'] = ipVersion;
    }
    public withVirsubnetId(virsubnetId: string): CreateVirsubnetCidrReservationOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withIpVersion(ipVersion: number): CreateVirsubnetCidrReservationOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: string): CreateVirsubnetCidrReservationOption {
        this['cidr'] = cidr;
        return this;
    }
    public withMask(mask: number): CreateVirsubnetCidrReservationOption {
        this['mask'] = mask;
        return this;
    }
    public withName(name: string): CreateVirsubnetCidrReservationOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVirsubnetCidrReservationOption {
        this['description'] = description;
        return this;
    }
}