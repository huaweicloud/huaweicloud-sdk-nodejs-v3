import { CustomAttributesRule } from './CustomAttributesRule';


export class CustomAttributes {
    public attribute?: string;
    public rules?: Array<CustomAttributesRule>;
    public constructor() { 
    }
    public withAttribute(attribute: string): CustomAttributes {
        this['attribute'] = attribute;
        return this;
    }
    public withRules(rules: Array<CustomAttributesRule>): CustomAttributes {
        this['rules'] = rules;
        return this;
    }
}