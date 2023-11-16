

export class LicensePropertyRules {
    public values?: Array<string>;
    public predicate?: string;
    public constructor() { 
    }
    public withValues(values: Array<string>): LicensePropertyRules {
        this['values'] = values;
        return this;
    }
    public withPredicate(predicate: string): LicensePropertyRules {
        this['predicate'] = predicate;
        return this;
    }
}