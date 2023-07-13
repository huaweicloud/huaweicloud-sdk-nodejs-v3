

export class BackupUpdate {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): BackupUpdate {
        this['name'] = name;
        return this;
    }
}