

export class UpdateAuditBean {
    public name?: string;
    public comment?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAuditBean {
        this['name'] = name;
        return this;
    }
    public withComment(comment: string): UpdateAuditBean {
        this['comment'] = comment;
        return this;
    }
}