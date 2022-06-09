

export class L7rulesInStatusResp {
    public type: L7rulesInStatusRespTypeEnum;
    public id: string;
    private 'provisioning_status': string | undefined;
    public constructor(type?: any, id?: any, provisioningStatus?: any) { 
        this['type'] = type;
        this['id'] = id;
        this['provisioning_status'] = provisioningStatus;
    }
    public withType(type: L7rulesInStatusRespTypeEnum): L7rulesInStatusResp {
        this['type'] = type;
        return this;
    }
    public withId(id: string): L7rulesInStatusResp {
        this['id'] = id;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): L7rulesInStatusResp {
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
export enum L7rulesInStatusRespTypeEnum {
    PATH = 'PATH',
    HOST_NAME = 'HOST_NAME'
}
