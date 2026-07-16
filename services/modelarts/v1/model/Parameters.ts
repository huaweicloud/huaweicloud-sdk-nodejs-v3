import { I18nDescription } from './I18nDescription';
import { ParametersConstraint } from './ParametersConstraint';


export class Parameters {
    public name?: string;
    public value?: string;
    public description?: string;
    public constraint?: ParametersConstraint;
    private 'i18n_description'?: I18nDescription;
    public constructor() { 
    }
    public withName(name: string): Parameters {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Parameters {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): Parameters {
        this['description'] = description;
        return this;
    }
    public withConstraint(constraint: ParametersConstraint): Parameters {
        this['constraint'] = constraint;
        return this;
    }
    public withI18nDescription(i18nDescription: I18nDescription): Parameters {
        this['i18n_description'] = i18nDescription;
        return this;
    }
    public set i18nDescription(i18nDescription: I18nDescription  | undefined) {
        this['i18n_description'] = i18nDescription;
    }
    public get i18nDescription(): I18nDescription | undefined {
        return this['i18n_description'];
    }
}