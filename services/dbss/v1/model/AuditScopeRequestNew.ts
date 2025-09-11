

export class AuditScopeRequestNew {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): AuditScopeRequestNew {
        this['ids'] = ids;
        return this;
    }
}