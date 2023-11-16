import { ExtensionExtendProp } from './ExtensionExtendProp';
import { ExtensionValidation } from './ExtensionValidation';


export class NewExtensionInputs {
    public name?: string;
    public type?: string;
    public label?: string;
    public description?: string;
    private 'default_value'?: string;
    public required?: boolean;
    private 'extend_prop'?: ExtensionExtendProp;
    public validation?: ExtensionValidation;
    public constructor() { 
    }
    public withName(name: string): NewExtensionInputs {
        this['name'] = name;
        return this;
    }
    public withType(type: string): NewExtensionInputs {
        this['type'] = type;
        return this;
    }
    public withLabel(label: string): NewExtensionInputs {
        this['label'] = label;
        return this;
    }
    public withDescription(description: string): NewExtensionInputs {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: string): NewExtensionInputs {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withRequired(required: boolean): NewExtensionInputs {
        this['required'] = required;
        return this;
    }
    public withExtendProp(extendProp: ExtensionExtendProp): NewExtensionInputs {
        this['extend_prop'] = extendProp;
        return this;
    }
    public set extendProp(extendProp: ExtensionExtendProp  | undefined) {
        this['extend_prop'] = extendProp;
    }
    public get extendProp(): ExtensionExtendProp | undefined {
        return this['extend_prop'];
    }
    public withValidation(validation: ExtensionValidation): NewExtensionInputs {
        this['validation'] = validation;
        return this;
    }
}