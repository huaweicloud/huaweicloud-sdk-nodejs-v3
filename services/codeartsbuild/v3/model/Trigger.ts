import { ParameterItem } from './ParameterItem';


export class Trigger {
    public parameters?: Array<ParameterItem>;
    public name?: string;
    public constructor(parameters?: Array<ParameterItem>, name?: string) { 
        this['parameters'] = parameters;
        this['name'] = name;
    }
    public withParameters(parameters: Array<ParameterItem>): Trigger {
        this['parameters'] = parameters;
        return this;
    }
    public withName(name: string): Trigger {
        this['name'] = name;
        return this;
    }
}