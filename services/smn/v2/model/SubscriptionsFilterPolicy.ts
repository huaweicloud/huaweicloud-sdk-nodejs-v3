

export class SubscriptionsFilterPolicy {
    public name?: string;
    private 'string_equals'?: Array<string>;
    public constructor(name?: string, stringEquals?: Array<string>) { 
        this['name'] = name;
        this['string_equals'] = stringEquals;
    }
    public withName(name: string): SubscriptionsFilterPolicy {
        this['name'] = name;
        return this;
    }
    public withStringEquals(stringEquals: Array<string>): SubscriptionsFilterPolicy {
        this['string_equals'] = stringEquals;
        return this;
    }
    public set stringEquals(stringEquals: Array<string>  | undefined) {
        this['string_equals'] = stringEquals;
    }
    public get stringEquals(): Array<string> | undefined {
        return this['string_equals'];
    }
}