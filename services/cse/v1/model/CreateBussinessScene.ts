import { CreateBussinessSceneSpec } from './CreateBussinessSceneSpec';
import { GovSelector } from './GovSelector';


export class CreateBussinessScene {
    public name?: string;
    public status?: string;
    public selector?: GovSelector;
    public spec?: CreateBussinessSceneSpec;
    public constructor() { 
    }
    public withName(name: string): CreateBussinessScene {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateBussinessScene {
        this['status'] = status;
        return this;
    }
    public withSelector(selector: GovSelector): CreateBussinessScene {
        this['selector'] = selector;
        return this;
    }
    public withSpec(spec: CreateBussinessSceneSpec): CreateBussinessScene {
        this['spec'] = spec;
        return this;
    }
}