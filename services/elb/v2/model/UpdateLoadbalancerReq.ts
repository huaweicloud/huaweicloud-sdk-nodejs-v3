

export class UpdateLoadbalancerReq {
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    private 'protection_status'?: UpdateLoadbalancerReqProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateLoadbalancerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateLoadbalancerReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateLoadbalancerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProtectionStatus(protectionStatus: UpdateLoadbalancerReqProtectionStatusEnum | string): UpdateLoadbalancerReq {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: UpdateLoadbalancerReqProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): UpdateLoadbalancerReqProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): UpdateLoadbalancerReq {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateLoadbalancerReqProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
