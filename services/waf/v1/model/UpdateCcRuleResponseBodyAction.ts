import { CcrulesListInfoActionDetail } from './CcrulesListInfoActionDetail';


export class UpdateCcRuleResponseBodyAction {
    public category?: UpdateCcRuleResponseBodyActionCategoryEnum | string;
    public detail?: CcrulesListInfoActionDetail;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: UpdateCcRuleResponseBodyActionCategoryEnum | string): UpdateCcRuleResponseBodyAction {
        this['category'] = category;
        return this;
    }
    public withDetail(detail: CcrulesListInfoActionDetail): UpdateCcRuleResponseBodyAction {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCcRuleResponseBodyActionCategoryEnum {
    CAPTCHA = 'captcha',
    BLOCK = 'block',
    LOG = 'log',
    DYNAMIC_BLOCK = 'dynamic_block'
}
