import { UpdateLtsConfigRequestBodyLtsConfigs } from './UpdateLtsConfigRequestBodyLtsConfigs';


export class UpdateLtsConfigRequestBody {
    private 'lts_configs'?: Array<UpdateLtsConfigRequestBodyLtsConfigs>;
    public constructor(ltsConfigs?: Array<UpdateLtsConfigRequestBodyLtsConfigs>) { 
        this['lts_configs'] = ltsConfigs;
    }
    public withLtsConfigs(ltsConfigs: Array<UpdateLtsConfigRequestBodyLtsConfigs>): UpdateLtsConfigRequestBody {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<UpdateLtsConfigRequestBodyLtsConfigs>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<UpdateLtsConfigRequestBodyLtsConfigs> | undefined {
        return this['lts_configs'];
    }
}