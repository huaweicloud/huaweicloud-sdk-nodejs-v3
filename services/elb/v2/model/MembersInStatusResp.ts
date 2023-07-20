

export class MembersInStatusResp {
    public id?: string;
    public address?: string;
    private 'protocol_port'?: number;
    private 'operating_status'?: MembersInStatusRespOperatingStatusEnum | string;
    private 'provisioning_status'?: string;
    public constructor(id?: string, address?: string, protocolPort?: number, operatingStatus?: string, provisioningStatus?: string) { 
        this['id'] = id;
        this['address'] = address;
        this['protocol_port'] = protocolPort;
        this['operating_status'] = operatingStatus;
        this['provisioning_status'] = provisioningStatus;
    }
    public withId(id: string): MembersInStatusResp {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): MembersInStatusResp {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): MembersInStatusResp {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withOperatingStatus(operatingStatus: MembersInStatusRespOperatingStatusEnum | string): MembersInStatusResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: MembersInStatusRespOperatingStatusEnum | string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): MembersInStatusRespOperatingStatusEnum | string | undefined {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: string): MembersInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MembersInStatusRespOperatingStatusEnum {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    DISABLED = 'DISABLED',
    NO_MONITOR = 'NO_MONITOR'
}
