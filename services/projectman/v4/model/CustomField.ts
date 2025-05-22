

export class CustomField {
    public name?: string;
    public value?: string;
    private 'new_name'?: string;
    public constructor() { 
    }
    public withName(name: string): CustomField {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CustomField {
        this['value'] = value;
        return this;
    }
    public withNewName(newName: string): CustomField {
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