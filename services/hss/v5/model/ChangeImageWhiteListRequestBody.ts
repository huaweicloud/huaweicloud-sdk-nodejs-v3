import { AddImageWhiteListsRequestBodyImageInfo } from './AddImageWhiteListsRequestBodyImageInfo';
import { AddImageWhiteListsRequestBodyQueryInfo } from './AddImageWhiteListsRequestBodyQueryInfo';


export class ChangeImageWhiteListRequestBody {
    private 'rule_type'?: string;
    private 'query_info'?: AddImageWhiteListsRequestBodyQueryInfo;
    private 'image_info'?: Array<AddImageWhiteListsRequestBodyImageInfo>;
    public description?: string;
    public constructor() { 
    }
    public withRuleType(ruleType: string): ChangeImageWhiteListRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withQueryInfo(queryInfo: AddImageWhiteListsRequestBodyQueryInfo): ChangeImageWhiteListRequestBody {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: AddImageWhiteListsRequestBodyQueryInfo  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): AddImageWhiteListsRequestBodyQueryInfo | undefined {
        return this['query_info'];
    }
    public withImageInfo(imageInfo: Array<AddImageWhiteListsRequestBodyImageInfo>): ChangeImageWhiteListRequestBody {
        this['image_info'] = imageInfo;
        return this;
    }
    public set imageInfo(imageInfo: Array<AddImageWhiteListsRequestBodyImageInfo>  | undefined) {
        this['image_info'] = imageInfo;
    }
    public get imageInfo(): Array<AddImageWhiteListsRequestBodyImageInfo> | undefined {
        return this['image_info'];
    }
    public withDescription(description: string): ChangeImageWhiteListRequestBody {
        this['description'] = description;
        return this;
    }
}