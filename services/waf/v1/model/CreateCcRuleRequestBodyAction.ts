import { CreateCcRuleRequestBodyActionDetail } from './CreateCcRuleRequestBodyActionDetail';


export class CreateCcRuleRequestBodyAction {
    public category?: CreateCcRuleRequestBodyActionCategoryEnum | string;
    public detail?: CreateCcRuleRequestBodyActionDetail;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: CreateCcRuleRequestBodyActionCategoryEnum | string): CreateCcRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
    public withDetail(detail: CreateCcRuleRequestBodyActionDetail): CreateCcRuleRequestBodyAction {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCcRuleRequestBodyActionCategoryEnum {
    CAPTCHA = 'captcha',
    BLOCK = 'block',
    LOG = 'log',
    DYNAMIC_BLOCK = 'dynamic_block'
}
