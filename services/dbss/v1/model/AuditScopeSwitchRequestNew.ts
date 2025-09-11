

export class AuditScopeSwitchRequestNew {
    public ids?: Array<string>;
    public status?: AuditScopeSwitchRequestNewStatusEnum | string;
    public constructor(ids?: Array<string>, status?: string) { 
        this['ids'] = ids;
        this['status'] = status;
    }
    public withIds(ids: Array<string>): AuditScopeSwitchRequestNew {
        this['ids'] = ids;
        return this;
    }
    public withStatus(status: AuditScopeSwitchRequestNewStatusEnum | string): AuditScopeSwitchRequestNew {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuditScopeSwitchRequestNewStatusEnum {
    OFF = 'OFF',
    ON = 'ON'
}
