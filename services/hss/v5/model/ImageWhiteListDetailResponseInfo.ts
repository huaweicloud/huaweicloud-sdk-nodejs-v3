import { ImageWhiteListDetailResponseInfoCves } from './ImageWhiteListDetailResponseInfoCves';
import { ImageWhiteListDetailResponseInfoImageInfo } from './ImageWhiteListDetailResponseInfoImageInfo';
import { ImageWhiteListDetailResponseInfoQueryInfo } from './ImageWhiteListDetailResponseInfoQueryInfo';


export class ImageWhiteListDetailResponseInfo {
    public id?: string;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'vul_type'?: string;
    public cves?: Array<ImageWhiteListDetailResponseInfoCves>;
    private 'rule_type'?: string;
    private 'query_info'?: ImageWhiteListDetailResponseInfoQueryInfo;
    private 'image_info'?: Array<ImageWhiteListDetailResponseInfoImageInfo>;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ImageWhiteListDetailResponseInfo {
        this['id'] = id;
        return this;
    }
    public withVulId(vulId: string): ImageWhiteListDetailResponseInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ImageWhiteListDetailResponseInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulType(vulType: string): ImageWhiteListDetailResponseInfo {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withCves(cves: Array<ImageWhiteListDetailResponseInfoCves>): ImageWhiteListDetailResponseInfo {
        this['cves'] = cves;
        return this;
    }
    public withRuleType(ruleType: string): ImageWhiteListDetailResponseInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withQueryInfo(queryInfo: ImageWhiteListDetailResponseInfoQueryInfo): ImageWhiteListDetailResponseInfo {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: ImageWhiteListDetailResponseInfoQueryInfo  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): ImageWhiteListDetailResponseInfoQueryInfo | undefined {
        return this['query_info'];
    }
    public withImageInfo(imageInfo: Array<ImageWhiteListDetailResponseInfoImageInfo>): ImageWhiteListDetailResponseInfo {
        this['image_info'] = imageInfo;
        return this;
    }
    public set imageInfo(imageInfo: Array<ImageWhiteListDetailResponseInfoImageInfo>  | undefined) {
        this['image_info'] = imageInfo;
    }
    public get imageInfo(): Array<ImageWhiteListDetailResponseInfoImageInfo> | undefined {
        return this['image_info'];
    }
    public withDescription(description: string): ImageWhiteListDetailResponseInfo {
        this['description'] = description;
        return this;
    }
}