import { Constraints } from './Constraints';


export class Params {
    public name?: string;
    public title?: string;
    public type?: string;
    public required?: boolean;
    public constraints?: Array<Constraints>;
    public deletion?: boolean;
    public defaults?: boolean;
    public constructor() { 
    }
    public withName(name: string): Params {
        this['name'] = name;
        return this;
    }
    public withTitle(title: string): Params {
        this['title'] = title;
        return this;
    }
    public withType(type: string): Params {
        this['type'] = type;
        return this;
    }
    public withRequired(required: boolean): Params {
        this['required'] = required;
        return this;
    }
    public withConstraints(constraints: Array<Constraints>): Params {
        this['constraints'] = constraints;
        return this;
    }
    public withDeletion(deletion: boolean): Params {
        this['deletion'] = deletion;
        return this;
    }
    public withDefaults(defaults: boolean): Params {
        this['defaults'] = defaults;
        return this;
    }
}