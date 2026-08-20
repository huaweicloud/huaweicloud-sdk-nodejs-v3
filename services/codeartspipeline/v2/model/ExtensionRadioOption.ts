

export class ExtensionRadioOption {
    public displayName?: string;
    public value?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): ExtensionRadioOption {
        this['displayName'] = displayName;
        return this;
    }
    public withValue(value: string): ExtensionRadioOption {
        this['value'] = value;
        return this;
    }
}