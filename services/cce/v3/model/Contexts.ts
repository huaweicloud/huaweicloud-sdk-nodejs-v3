import { Context } from './Context';


export class Contexts {
    public name?: string;
    public context?: Context;
    public constructor() { 
    }
    public withName(name: string): Contexts {
        this['name'] = name;
        return this;
    }
    public withContext(context: Context): Contexts {
        this['context'] = context;
        return this;
    }
}