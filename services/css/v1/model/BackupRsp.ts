

export class BackupRsp {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): BackupRsp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupRsp {
        this['name'] = name;
        return this;
    }
}