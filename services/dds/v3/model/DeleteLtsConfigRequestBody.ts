import { DeleteLtsConfigRequestBodyLtsConfigs } from './DeleteLtsConfigRequestBodyLtsConfigs';


export class DeleteLtsConfigRequestBody {
    private 'lts_configs'?: Array<DeleteLtsConfigRequestBodyLtsConfigs>;
    public constructor(ltsConfigs?: Array<DeleteLtsConfigRequestBodyLtsConfigs>) { 
        this['lts_configs'] = ltsConfigs;
    }
    public withLtsConfigs(ltsConfigs: Array<DeleteLtsConfigRequestBodyLtsConfigs>): DeleteLtsConfigRequestBody {
        this['lts_configs'] = ltsConfigs;
        return this;
    }
    public set ltsConfigs(ltsConfigs: Array<DeleteLtsConfigRequestBodyLtsConfigs>  | undefined) {
        this['lts_configs'] = ltsConfigs;
    }
    public get ltsConfigs(): Array<DeleteLtsConfigRequestBodyLtsConfigs> | undefined {
        return this['lts_configs'];
    }
}