import { AfterHbaConfOption } from './AfterHbaConfOption';
import { BeforeHbaConfOption } from './BeforeHbaConfOption';


export class ModifyHbaConfRequestBody {
    private 'before_conf'?: BeforeHbaConfOption;
    private 'after_conf'?: AfterHbaConfOption;
    public constructor(beforeConf?: BeforeHbaConfOption, afterConf?: AfterHbaConfOption) { 
        this['before_conf'] = beforeConf;
        this['after_conf'] = afterConf;
    }
    public withBeforeConf(beforeConf: BeforeHbaConfOption): ModifyHbaConfRequestBody {
        this['before_conf'] = beforeConf;
        return this;
    }
    public set beforeConf(beforeConf: BeforeHbaConfOption  | undefined) {
        this['before_conf'] = beforeConf;
    }
    public get beforeConf(): BeforeHbaConfOption | undefined {
        return this['before_conf'];
    }
    public withAfterConf(afterConf: AfterHbaConfOption): ModifyHbaConfRequestBody {
        this['after_conf'] = afterConf;
        return this;
    }
    public set afterConf(afterConf: AfterHbaConfOption  | undefined) {
        this['after_conf'] = afterConf;
    }
    public get afterConf(): AfterHbaConfOption | undefined {
        return this['after_conf'];
    }
}