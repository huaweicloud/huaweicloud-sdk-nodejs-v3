

export class CustomFieldV2 {
    public name?: string;
    public value?: string;
    private 'new_name'?: string;
    public constructor() { 
    }
    public withName(name: string): CustomFieldV2 {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CustomFieldV2 {
        this['value'] = value;
        return this;
    }
    public withNewName(newName: string): CustomFieldV2 {
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