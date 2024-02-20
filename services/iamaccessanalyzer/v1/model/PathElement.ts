import { Substring } from './Substring';


export class PathElement {
    public index?: number;
    public key?: string;
    public substring?: Substring;
    public value?: string;
    public constructor() { 
    }
    public withIndex(index: number): PathElement {
        this['index'] = index;
        return this;
    }
    public withKey(key: string): PathElement {
        this['key'] = key;
        return this;
    }
    public withSubstring(substring: Substring): PathElement {
        this['substring'] = substring;
        return this;
    }
    public withValue(value: string): PathElement {
        this['value'] = value;
        return this;
    }
}