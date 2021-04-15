import { Context } from './Context';


export class Contexts {
    public context?: Context;
    public name?: string;
    public constructor() { 
    }
    public withContext(context: Context): Contexts {
        this['context'] = context;
        return this;
    }
    public withName(name: string): Contexts {
        this['name'] = name;
        return this;
    }
}