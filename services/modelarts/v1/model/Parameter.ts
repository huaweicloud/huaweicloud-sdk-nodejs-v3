import { ParameterConstraint } from './ParameterConstraint';
import { ParameterI18nDescription } from './ParameterI18nDescription';


export class Parameter {
    public name?: string;
    public value?: string;
    public description?: string;
    public constraint?: ParameterConstraint;
    private 'i18n_description'?: ParameterI18nDescription;
    public constructor() { 
    }
    public withName(name: string): Parameter {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): Parameter {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): Parameter {
        this['description'] = description;
        return this;
    }
    public withConstraint(constraint: ParameterConstraint): Parameter {
        this['constraint'] = constraint;
        return this;
    }
    public withI18nDescription(i18nDescription: ParameterI18nDescription): Parameter {
        this['i18n_description'] = i18nDescription;
        return this;
    }
    public set i18nDescription(i18nDescription: ParameterI18nDescription  | undefined) {
        this['i18n_description'] = i18nDescription;
    }
    public get i18nDescription(): ParameterI18nDescription | undefined {
        return this['i18n_description'];
    }
}