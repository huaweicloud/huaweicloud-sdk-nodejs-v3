import { ExtensionParameterDisplaySettings } from './ExtensionParameterDisplaySettings';
import { ExtensionParameterValidation } from './ExtensionParameterValidation';


export class ExtensionParameter {
    public name?: string;
    public label?: string;
    public validation?: ExtensionParameterValidation;
    public defaultValue?: string;
    public helpMarkdown?: string;
    public displaySettings?: ExtensionParameterDisplaySettings;
    public constructor() { 
    }
    public withName(name: string): ExtensionParameter {
        this['name'] = name;
        return this;
    }
    public withLabel(label: string): ExtensionParameter {
        this['label'] = label;
        return this;
    }
    public withValidation(validation: ExtensionParameterValidation): ExtensionParameter {
        this['validation'] = validation;
        return this;
    }
    public withDefaultValue(defaultValue: string): ExtensionParameter {
        this['defaultValue'] = defaultValue;
        return this;
    }
    public withHelpMarkdown(helpMarkdown: string): ExtensionParameter {
        this['helpMarkdown'] = helpMarkdown;
        return this;
    }
    public withDisplaySettings(displaySettings: ExtensionParameterDisplaySettings): ExtensionParameter {
        this['displaySettings'] = displaySettings;
        return this;
    }
}