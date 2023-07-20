

export class UpdateDatabaseReq {
    public name?: string;
    public comment?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateDatabaseReq {
        this['name'] = name;
        return this;
    }
    public withComment(comment: string): UpdateDatabaseReq {
        this['comment'] = comment;
        return this;
    }
}