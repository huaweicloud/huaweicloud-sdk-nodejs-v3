import { SessionPersistence } from './SessionPersistence';


export class UpdatePoolReq {
    private 'lb_algorithm'?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    private 'session_persistence'?: SessionPersistence;
    private 'protection_status'?: UpdatePoolReqProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor() { 
    }
    public withLbAlgorithm(lbAlgorithm: string): UpdatePoolReq {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withName(name: string): UpdatePoolReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePoolReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdatePoolReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): UpdatePoolReq {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): SessionPersistence | undefined {
        return this['session_persistence'];
    }
    public withProtectionStatus(protectionStatus: UpdatePoolReqProtectionStatusEnum | string): UpdatePoolReq {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: UpdatePoolReqProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): UpdatePoolReqProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): UpdatePoolReq {
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
export enum UpdatePoolReqProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
