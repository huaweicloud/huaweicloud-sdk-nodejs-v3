import { Context } from './Context';


export class NamedContext {
    public name?: string;
    public context?: Context;
    public constructor() { 
    }
    public withName(name: string): NamedContext {
        this['name'] = name;
        return this;
    }
    public withContext(context: Context): NamedContext {
        this['context'] = context;
        return this;
    }
}