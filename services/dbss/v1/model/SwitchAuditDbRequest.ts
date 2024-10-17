

export class SwitchAuditDbRequest {
    public id?: string;
    public status?: SwitchAuditDbRequestStatusEnum | string;
    private 'lts_audit_switch'?: number;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): SwitchAuditDbRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: SwitchAuditDbRequestStatusEnum | string): SwitchAuditDbRequest {
        this['status'] = status;
        return this;
    }
    public withLtsAuditSwitch(ltsAuditSwitch: number): SwitchAuditDbRequest {
        this['lts_audit_switch'] = ltsAuditSwitch;
        return this;
    }
    public set ltsAuditSwitch(ltsAuditSwitch: number  | undefined) {
        this['lts_audit_switch'] = ltsAuditSwitch;
    }
    public get ltsAuditSwitch(): number | undefined {
        return this['lts_audit_switch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchAuditDbRequestStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
