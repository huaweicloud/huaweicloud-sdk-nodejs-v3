import { CcrulesListInfoActionDetail } from './CcrulesListInfoActionDetail';


export class CcrulesListInfoAction {
    public category: CcrulesListInfoActionCategoryEnum;
    public detail?: CcrulesListInfoActionDetail;
    public constructor(category?: any) { 
        this['category'] = category;
    }
    public withCategory(category: CcrulesListInfoActionCategoryEnum): CcrulesListInfoAction {
        this['category'] = category;
        return this;
    }
    public withDetail(detail: CcrulesListInfoActionDetail): CcrulesListInfoAction {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CcrulesListInfoActionCategoryEnum {
    CAPTCHA = 'captcha',
    BLOCK = 'block',
    LOG = 'log',
    DYNAMIC_BLOCK = 'dynamic_block'
}
