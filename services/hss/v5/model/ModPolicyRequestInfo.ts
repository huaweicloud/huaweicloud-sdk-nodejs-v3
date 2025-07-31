import { PolicyContent } from './PolicyContent';
import { PolicyProtectScope } from './PolicyProtectScope';
import { WhiteImageInfo } from './WhiteImageInfo';


export class ModPolicyRequestInfo {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    private 'template_id'?: string;
    private 'policy_description'?: string;
    public content?: PolicyContent;
    private 'white_image_list'?: Array<WhiteImageInfo>;
    public resources?: Array<PolicyProtectScope>;
    public parameters?: string;
    public constructor(policyName?: string, policyId?: string, templateId?: string, policyDescription?: string, content?: PolicyContent, whiteImageList?: Array<WhiteImageInfo>, resources?: Array<PolicyProtectScope>, parameters?: string) { 
        this['policy_name'] = policyName;
        this['policy_id'] = policyId;
        this['template_id'] = templateId;
        this['policy_description'] = policyDescription;
        this['content'] = content;
        this['white_image_list'] = whiteImageList;
        this['resources'] = resources;
        this['parameters'] = parameters;
    }
    public withPolicyName(policyName: string): ModPolicyRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ModPolicyRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withTemplateId(templateId: string): ModPolicyRequestInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withPolicyDescription(policyDescription: string): ModPolicyRequestInfo {
        this['policy_description'] = policyDescription;
        return this;
    }
    public set policyDescription(policyDescription: string  | undefined) {
        this['policy_description'] = policyDescription;
    }
    public get policyDescription(): string | undefined {
        return this['policy_description'];
    }
    public withContent(content: PolicyContent): ModPolicyRequestInfo {
        this['content'] = content;
        return this;
    }
    public withWhiteImageList(whiteImageList: Array<WhiteImageInfo>): ModPolicyRequestInfo {
        this['white_image_list'] = whiteImageList;
        return this;
    }
    public set whiteImageList(whiteImageList: Array<WhiteImageInfo>  | undefined) {
        this['white_image_list'] = whiteImageList;
    }
    public get whiteImageList(): Array<WhiteImageInfo> | undefined {
        return this['white_image_list'];
    }
    public withResources(resources: Array<PolicyProtectScope>): ModPolicyRequestInfo {
        this['resources'] = resources;
        return this;
    }
    public withParameters(parameters: string): ModPolicyRequestInfo {
        this['parameters'] = parameters;
        return this;
    }
}