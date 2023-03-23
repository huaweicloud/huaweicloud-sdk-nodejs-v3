import { CreateCcRuleRequestBodyActionDetail } from './CreateCcRuleRequestBodyActionDetail';


export class CreateCcRuleRequestBodyAction {
    public category: CreateCcRuleRequestBodyActionCategoryEnum;
    public detail?: CreateCcRuleRequestBodyActionDetail;
    public constructor(category?: any) { 
        this['category'] = category;
    }
    public withCategory(category: CreateCcRuleRequestBodyActionCategoryEnum): CreateCcRuleRequestBodyAction {
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
