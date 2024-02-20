

export class Criterion {
    public contains?: Array<string>;
    public eq?: Array<string>;
    public exists?: boolean;
    public neq?: Array<string>;
    public constructor() { 
    }
    public withContains(contains: Array<string>): Criterion {
        this['contains'] = contains;
        return this;
    }
    public withEq(eq: Array<string>): Criterion {
        this['eq'] = eq;
        return this;
    }
    public withExists(exists: boolean): Criterion {
        this['exists'] = exists;
        return this;
    }
    public withNeq(neq: Array<string>): Criterion {
        this['neq'] = neq;
        return this;
    }
}