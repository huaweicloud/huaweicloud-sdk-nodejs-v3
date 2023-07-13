import { ResouceInfo } from './ResouceInfo';


export class Dependent {
    public name?: string;
    private 'dependent_services'?: Array<ResouceInfo> | undefined;
    public constructor() { 
    }
    public withName(name: string): Dependent {
        this['name'] = name;
        return this;
    }
    public withDependentServices(dependentServices: Array<ResouceInfo>): Dependent {
        this['dependent_services'] = dependentServices;
        return this;
    }
    public set dependentServices(dependentServices: Array<ResouceInfo> | undefined) {
        this['dependent_services'] = dependentServices;
    }
    public get dependentServices() {
        return this['dependent_services'];
    }
}