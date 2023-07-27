

export class AclBatchDelete {
    public acls?: Array<string>;
    public constructor() { 
    }
    public withAcls(acls: Array<string>): AclBatchDelete {
        this['acls'] = acls;
        return this;
    }
}