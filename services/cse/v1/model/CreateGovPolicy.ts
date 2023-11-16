import { GovSelector } from './GovSelector';


export class CreateGovPolicy {
    public name?: string;
    public selector?: GovSelector;
    public spec?: object;
    public constructor() { 
    }
    public withName(name: string): CreateGovPolicy {
        this['name'] = name;
        return this;
    }
    public withSelector(selector: GovSelector): CreateGovPolicy {
        this['selector'] = selector;
        return this;
    }
    public withSpec(spec: object): CreateGovPolicy {
        this['spec'] = spec;
        return this;
    }
}