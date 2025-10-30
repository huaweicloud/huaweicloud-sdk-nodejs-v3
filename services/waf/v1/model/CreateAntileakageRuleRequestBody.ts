import { LeakageListInfoAction } from './LeakageListInfoAction';


export class CreateAntileakageRuleRequestBody {
    public url?: string;
    public category?: CreateAntileakageRuleRequestBodyCategoryEnum | string;
    public contents?: Array<string>;
    public action?: LeakageListInfoAction;
    public description?: string;
    public constructor(url?: string, category?: string, contents?: Array<string>) { 
        this['url'] = url;
        this['category'] = category;
        this['contents'] = contents;
    }
    public withUrl(url: string): CreateAntileakageRuleRequestBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: CreateAntileakageRuleRequestBodyCategoryEnum | string): CreateAntileakageRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): CreateAntileakageRuleRequestBody {
        this['contents'] = contents;
        return this;
    }
    public withAction(action: LeakageListInfoAction): CreateAntileakageRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDescription(description: string): CreateAntileakageRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAntileakageRuleRequestBodyCategoryEnum {
    CODE = 'code',
    SENSITIVE = 'sensitive'
}
