import { UpdateMixParam } from './UpdateMixParam';


export class UpdateMixJobReq {
    private 'mix_param'?: UpdateMixParam;
    public constructor(mixParam?: UpdateMixParam) { 
        this['mix_param'] = mixParam;
    }
    public withMixParam(mixParam: UpdateMixParam): UpdateMixJobReq {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: UpdateMixParam  | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam(): UpdateMixParam | undefined {
        return this['mix_param'];
    }
}