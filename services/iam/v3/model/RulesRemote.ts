

export class RulesRemote {
    public type: string;
    private 'any_one_of'?: Array<string> | undefined;
    private 'not_any_of'?: Array<string> | undefined;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): RulesRemote {
        this['type'] = type;
        return this;
    }
    public withAnyOneOf(anyOneOf: Array<string>): RulesRemote {
        this['any_one_of'] = anyOneOf;
        return this;
    }
    public set anyOneOf(anyOneOf: Array<string> | undefined) {
        this['any_one_of'] = anyOneOf;
    }
    public get anyOneOf() {
        return this['any_one_of'];
    }
    public withNotAnyOf(notAnyOf: Array<string>): RulesRemote {
        this['not_any_of'] = notAnyOf;
        return this;
    }
    public set notAnyOf(notAnyOf: Array<string> | undefined) {
        this['not_any_of'] = notAnyOf;
    }
    public get notAnyOf() {
        return this['not_any_of'];
    }
}