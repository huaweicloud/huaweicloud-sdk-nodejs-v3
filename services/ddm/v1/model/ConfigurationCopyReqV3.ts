

export class ConfigurationCopyReqV3 {
    private 'new_name'?: string;
    public description?: string;
    public constructor(newName?: string) { 
        this['new_name'] = newName;
    }
    public withNewName(newName: string): ConfigurationCopyReqV3 {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
    public withDescription(description: string): ConfigurationCopyReqV3 {
        this['description'] = description;
        return this;
    }
}