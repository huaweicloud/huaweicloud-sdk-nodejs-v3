import { Version } from './Version';


export class Versions {
    public values?: Array<Version>;
    public constructor(values?: Array<Version>) { 
        this['values'] = values;
    }
    public withValues(values: Array<Version>): Versions {
        this['values'] = values;
        return this;
    }
}