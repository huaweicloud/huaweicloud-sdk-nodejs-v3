import { TemplateConfigs } from './TemplateConfigs';


export class CreateTemplateRequestBody {
    private 'tml_name'?: string;
    public remark?: string;
    public configs?: TemplateConfigs;
    public constructor(tmlName?: string, configs?: TemplateConfigs) { 
        this['tml_name'] = tmlName;
        this['configs'] = configs;
    }
    public withTmlName(tmlName: string): CreateTemplateRequestBody {
        this['tml_name'] = tmlName;
        return this;
    }
    public set tmlName(tmlName: string  | undefined) {
        this['tml_name'] = tmlName;
    }
    public get tmlName(): string | undefined {
        return this['tml_name'];
    }
    public withRemark(remark: string): CreateTemplateRequestBody {
        this['remark'] = remark;
        return this;
    }
    public withConfigs(configs: TemplateConfigs): CreateTemplateRequestBody {
        this['configs'] = configs;
        return this;
    }
}