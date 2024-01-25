import { DubboMethod } from './DubboMethod';


export class Dubbo {
    public service?: string;
    public version?: string;
    public group?: string;
    public methods?: Array<DubboMethod>;
    public constructor() { 
    }
    public withService(service: string): Dubbo {
        this['service'] = service;
        return this;
    }
    public withVersion(version: string): Dubbo {
        this['version'] = version;
        return this;
    }
    public withGroup(group: string): Dubbo {
        this['group'] = group;
        return this;
    }
    public withMethods(methods: Array<DubboMethod>): Dubbo {
        this['methods'] = methods;
        return this;
    }
}