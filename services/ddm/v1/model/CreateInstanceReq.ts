import { CreateInstanceDetail } from './CreateInstanceDetail';
import { CreateInstanceExtendParam } from './CreateInstanceExtendParam';


export class CreateInstanceReq {
    public instance?: CreateInstanceDetail;
    private 'extend_param'?: CreateInstanceExtendParam;
    public constructor(instance?: CreateInstanceDetail) { 
        this['instance'] = instance;
    }
    public withInstance(instance: CreateInstanceDetail): CreateInstanceReq {
        this['instance'] = instance;
        return this;
    }
    public withExtendParam(extendParam: CreateInstanceExtendParam): CreateInstanceReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: CreateInstanceExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): CreateInstanceExtendParam | undefined {
        return this['extend_param'];
    }
}