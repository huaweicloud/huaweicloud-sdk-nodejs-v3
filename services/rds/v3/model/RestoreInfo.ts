

export class RestoreInfo {
    private 'old_name'?: string;
    private 'new_name'?: string;
    public constructor(oldName?: string, newName?: string) { 
        this['old_name'] = oldName;
        this['new_name'] = newName;
    }
    public withOldName(oldName: string): RestoreInfo {
        this['old_name'] = oldName;
        return this;
    }
    public set oldName(oldName: string  | undefined) {
        this['old_name'] = oldName;
    }
    public get oldName(): string | undefined {
        return this['old_name'];
    }
    public withNewName(newName: string): RestoreInfo {
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