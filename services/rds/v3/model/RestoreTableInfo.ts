

export class RestoreTableInfo {
    public oldName?: string;
    public newName?: string;
    public constructor(oldName?: string, newName?: string) { 
        this['oldName'] = oldName;
        this['newName'] = newName;
    }
    public withOldName(oldName: string): RestoreTableInfo {
        this['oldName'] = oldName;
        return this;
    }
    public withNewName(newName: string): RestoreTableInfo {
        this['newName'] = newName;
        return this;
    }
}