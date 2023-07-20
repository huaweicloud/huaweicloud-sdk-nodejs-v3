

export class NoSqlCreateBackupRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string, description?: string) { 
        this['name'] = name;
        this['description'] = description;
    }
    public withName(name: string): NoSqlCreateBackupRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NoSqlCreateBackupRequestBody {
        this['description'] = description;
        return this;
    }
}