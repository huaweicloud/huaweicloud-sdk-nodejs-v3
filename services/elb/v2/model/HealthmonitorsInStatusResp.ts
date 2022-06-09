

export class HealthmonitorsInStatusResp {
    public id: string;
    public name: string;
    public type: HealthmonitorsInStatusRespTypeEnum;
    private 'provisioning_status': string | undefined;
    public constructor(id?: any, name?: any, type?: any, provisioningStatus?: any) { 
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
    public withType(type: HealthmonitorsInStatusRespTypeEnum): HealthmonitorsInStatusResp {
        this['type'] = type;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): HealthmonitorsInStatusResp {
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
export enum HealthmonitorsInStatusRespTypeEnum {
    UDP_CONNECT = 'UDP_CONNECT',
    TCP = 'TCP',
    HTTP = 'HTTP'
}
