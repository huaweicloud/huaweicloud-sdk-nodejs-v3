import { AddImageWhiteListsRequestBodyImageInfo } from './AddImageWhiteListsRequestBodyImageInfo';
import { AddImageWhiteListsRequestBodyQueryInfo } from './AddImageWhiteListsRequestBodyQueryInfo';


export class AddImageWhiteListsRequestBody {
    private 'vul_type'?: string;
    private 'vul_ids'?: Array<string>;
    private 'rule_type'?: string;
    private 'query_info'?: AddImageWhiteListsRequestBodyQueryInfo;
    private 'image_info'?: Array<AddImageWhiteListsRequestBodyImageInfo>;
    public description?: string;
    public constructor(ruleType?: string) { 
        this['rule_type'] = ruleType;
    }
    public withVulType(vulType: string): AddImageWhiteListsRequestBody {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withVulIds(vulIds: Array<string>): AddImageWhiteListsRequestBody {
        this['vul_ids'] = vulIds;
        return this;
    }
    public set vulIds(vulIds: Array<string>  | undefined) {
        this['vul_ids'] = vulIds;
    }
    public get vulIds(): Array<string> | undefined {
        return this['vul_ids'];
    }
    public withRuleType(ruleType: string): AddImageWhiteListsRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withQueryInfo(queryInfo: AddImageWhiteListsRequestBodyQueryInfo): AddImageWhiteListsRequestBody {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: AddImageWhiteListsRequestBodyQueryInfo  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): AddImageWhiteListsRequestBodyQueryInfo | undefined {
        return this['query_info'];
    }
    public withImageInfo(imageInfo: Array<AddImageWhiteListsRequestBodyImageInfo>): AddImageWhiteListsRequestBody {
        this['image_info'] = imageInfo;
        return this;
    }
    public set imageInfo(imageInfo: Array<AddImageWhiteListsRequestBodyImageInfo>  | undefined) {
        this['image_info'] = imageInfo;
    }
    public get imageInfo(): Array<AddImageWhiteListsRequestBodyImageInfo> | undefined {
        return this['image_info'];
    }
    public withDescription(description: string): AddImageWhiteListsRequestBody {
        this['description'] = description;
        return this;
    }
}