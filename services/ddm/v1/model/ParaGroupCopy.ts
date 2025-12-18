

export class ParaGroupCopy {
    private 'new_name'?: string;
    public description?: string;
    public constructor(newName?: string) { 
        this['new_name'] = newName;
    }
    public withNewName(newName: string): ParaGroupCopy {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
    public withDescription(description: string): ParaGroupCopy {
        this['description'] = description;
        return this;
    }
}