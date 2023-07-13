import { UpdateMixParam } from './UpdateMixParam';


export class UpdateMixJobReq {
    private 'mix_param': UpdateMixParam | undefined;
    public constructor(mixParam?: any) { 
        this['mix_param'] = mixParam;
    }
    public withMixParam(mixParam: UpdateMixParam): UpdateMixJobReq {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: UpdateMixParam | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam() {
        return this['mix_param'];
    }
}