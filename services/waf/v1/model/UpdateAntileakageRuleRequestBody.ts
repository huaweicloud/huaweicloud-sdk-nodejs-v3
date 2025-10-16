import { BatchCreateAntileakageRuleRequestBodyAction } from './BatchCreateAntileakageRuleRequestBodyAction';


export class UpdateAntileakageRuleRequestBody {
    public url?: string;
    public category?: UpdateAntileakageRuleRequestBodyCategoryEnum | string;
    public contents?: Array<string>;
    public action?: BatchCreateAntileakageRuleRequestBodyAction;
    public description?: string;
    public constructor(url?: string, category?: string, contents?: Array<string>) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): UpdateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: UpdateAntileakageRuleRequestBodyCategoryEnum | string): UpdateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): UpdateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withAction(action: BatchCreateAntileakageRuleRequestBodyAction): UpdateAntileakageRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): UpdateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
