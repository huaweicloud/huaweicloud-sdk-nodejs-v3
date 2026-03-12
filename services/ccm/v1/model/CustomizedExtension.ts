

export class CustomizedExtension {
    private 'object_identifier'?: string;
    public value?: string;
    public constructor() { 
    }
    public withObjectIdentifier(objectIdentifier: string): CustomizedExtension {
        this['object_identifier'] = objectIdentifier;
        return this;
    }
    public set objectIdentifier(objectIdentifier: string  | undefined) {
        this['object_identifier'] = objectIdentifier;
    }
    public get objectIdentifier(): string | undefined {
        return this['object_identifier'];
    }
    public withValue(value: string): CustomizedExtension {
        this['value'] = value;
        return this;
    }
}