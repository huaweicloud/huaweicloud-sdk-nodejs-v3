import { CreateCcRuleRequestBodyActionDetail } from './CreateCcRuleRequestBodyActionDetail';


export class BatchCreateCcRuleRequestBodyAction {
    public category?: BatchCreateCcRuleRequestBodyActionCategoryEnum | string;
    public detail?: CreateCcRuleRequestBodyActionDetail;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: BatchCreateCcRuleRequestBodyActionCategoryEnum | string): BatchCreateCcRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
    public withDetail(detail: CreateCcRuleRequestBodyActionDetail): BatchCreateCcRuleRequestBodyAction {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateCcRuleRequestBodyActionCategoryEnum {
    CAPTCHA = 'captcha',
    BLOCK = 'block',
    LOG = 'log',
    DYNAMIC_BLOCK = 'dynamic_block'
}
