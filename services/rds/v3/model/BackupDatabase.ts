

export class BackupDatabase {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BackupDatabase {
        this['name'] = name;
        return this;
    }
}