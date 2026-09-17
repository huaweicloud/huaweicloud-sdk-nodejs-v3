

export class InplaceMigrateNodeItem {
    public uid?: string;
    public constructor(uid?: string) { 
        this['uid'] = uid;
    }
    public withUid(uid: string): InplaceMigrateNodeItem {
        this['uid'] = uid;
        return this;
    }
}