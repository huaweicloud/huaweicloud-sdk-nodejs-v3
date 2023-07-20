

export class HealthmonitorsInStatusResp {
    public id?: string;
    public name?: string;
    public type?: HealthmonitorsInStatusRespTypeEnum | string;
    private 'provisioning_status'?: string;
    public constructor(id?: string, name?: string, type?: string, provisioningStatus?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['provisioning_status'] = provisioningStatus;
    }
    public withId(id: string): HealthmonitorsInStatusResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HealthmonitorsInStatusResp {
        this['name'] = name;
        return this;
    }
    public withType(type: HealthmonitorsInStatusRespTypeEnum | string): HealthmonitorsInStatusResp {
        this['type'] = type;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): HealthmonitorsInStatusResp {
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
export enum HealthmonitorsInStatusRespTypeEnum {
    UDP_CONNECT = 'UDP_CONNECT',
    TCP = 'TCP',
    HTTP = 'HTTP'
}
