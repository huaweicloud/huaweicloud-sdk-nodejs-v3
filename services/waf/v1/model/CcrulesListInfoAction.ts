import { CcrulesListInfoActionDetail } from './CcrulesListInfoActionDetail';


export class CcrulesListInfoAction {
    public category?: CcrulesListInfoActionCategoryEnum | string;
    public detail?: CcrulesListInfoActionDetail;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: CcrulesListInfoActionCategoryEnum | string): CcrulesListInfoAction {
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
