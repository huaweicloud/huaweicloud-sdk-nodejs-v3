

export class RestoreDatabaseInfo {
    private 'old_name'?: string;
    private 'new_name'?: string;
    public constructor() { 
    }
    public withOldName(oldName: string): RestoreDatabaseInfo {
        this['old_name'] = oldName;
        return this;
    }
    public set oldName(oldName: string  | undefined) {
        this['old_name'] = oldName;
    }
    public get oldName(): string | undefined {
        return this['old_name'];
    }
    public withNewName(newName: string): RestoreDatabaseInfo {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
}