import { Input } from './Input';


export class Configs {
    public inputs?: Array<Input>;
    public name?: string;
    public id?: number;
    public type?: string;
    public constructor(inputs?: Array<Input>, name?: string) { 
        this['inputs'] = inputs;
        this['name'] = name;
    }
    public withInputs(inputs: Array<Input>): Configs {
        this['inputs'] = inputs;
        return this;
    }
    public withName(name: string): Configs {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Configs {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Configs {
        this['type'] = type;
        return this;
    }
}