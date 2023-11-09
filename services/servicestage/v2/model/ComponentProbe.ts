import { ProbeParameter } from './ProbeParameter';


export class ComponentProbe {
    public type?: ComponentProbeTypeEnum | string;
    public delay?: number;
    public timeout?: number;
    public parameters?: ProbeParameter;
    public constructor(type?: string, parameters?: ProbeParameter) { 
        this['type'] = type;
        this['parameters'] = parameters;
    }
    public withType(type: ComponentProbeTypeEnum | string): ComponentProbe {
        this['type'] = type;
        return this;
    }
    public withDelay(delay: number): ComponentProbe {
        this['delay'] = delay;
        return this;
    }
    public withTimeout(timeout: number): ComponentProbe {
        this['timeout'] = timeout;
        return this;
    }
    public withParameters(parameters: ProbeParameter): ComponentProbe {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentProbeTypeEnum {
    HTTP = 'http',
    TCP = 'tcp',
    COMMAND = 'command'
}
