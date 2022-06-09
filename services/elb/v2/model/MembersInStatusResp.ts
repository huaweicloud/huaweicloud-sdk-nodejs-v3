

export class MembersInStatusResp {
    public id: string;
    public address: string;
    private 'protocol_port': number | undefined;
    private 'operating_status': MembersInStatusRespOperatingStatusEnum | undefined;
    private 'provisioning_status': string | undefined;
    public constructor(id?: any, address?: any, protocolPort?: any, operatingStatus?: any, provisioningStatus?: any) { 
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
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withOperatingStatus(operatingStatus: MembersInStatusRespOperatingStatusEnum): MembersInStatusResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: MembersInStatusRespOperatingStatusEnum | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withProvisioningStatus(provisioningStatus: string): MembersInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
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
