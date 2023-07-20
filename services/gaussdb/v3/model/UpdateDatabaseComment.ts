

export class UpdateDatabaseComment {
    public name?: string;
    public comment?: string;
    public constructor(name?: string, comment?: string) { 
        this['name'] = name;
        this['comment'] = comment;
    }
    public withName(name: string): UpdateDatabaseComment {
        this['name'] = name;
        return this;
    }
    public withComment(comment: string): UpdateDatabaseComment {
        this['comment'] = comment;
        return this;
    }
}