import { LifecycleProcessParameter } from './LifecycleProcessParameter';


export class LifecycleProcess {
    public type?: string;
    public parameters?: LifecycleProcessParameter;
    public constructor() { 
    }
    public withType(type: string): LifecycleProcess {
        this['type'] = type;
        return this;
    }
    public withParameters(parameters: LifecycleProcessParameter): LifecycleProcess {
        this['parameters'] = parameters;
        return this;
    }
}