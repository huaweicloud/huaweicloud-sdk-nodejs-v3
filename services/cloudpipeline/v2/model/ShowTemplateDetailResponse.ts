import { TemplateParam } from './TemplateParam';
import { TemplateState } from './TemplateState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateDetailResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'is_build_in'?: boolean;
    public region?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'create_time'?: string;
    private 'last_modify_time'?: string;
    private 'is_watch'?: boolean;
    public description?: string;
    public parameter?: Array<TemplateParam>;
    public flow?: { [key: string]: { [key: string]: string; }; };
    public states?: { [key: string]: TemplateState; };
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowTemplateDetailResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowTemplateDetailResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ShowTemplateDetailResponse {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withUserId(userId: string): ShowTemplateDetailResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowTemplateDetailResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): ShowTemplateDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowTemplateDetailResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIsBuildIn(isBuildIn: boolean): ShowTemplateDetailResponse {
        this['is_build_in'] = isBuildIn;
        return this;
    }
    public set isBuildIn(isBuildIn: boolean  | undefined) {
        this['is_build_in'] = isBuildIn;
    }
    public get isBuildIn(): boolean | undefined {
        return this['is_build_in'];
    }
    public withRegion(region: string): ShowTemplateDetailResponse {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): ShowTemplateDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowTemplateDetailResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withCreateTime(createTime: string): ShowTemplateDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): ShowTemplateDetailResponse {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
    public withIsWatch(isWatch: boolean): ShowTemplateDetailResponse {
        this['is_watch'] = isWatch;
        return this;
    }
    public set isWatch(isWatch: boolean  | undefined) {
        this['is_watch'] = isWatch;
    }
    public get isWatch(): boolean | undefined {
        return this['is_watch'];
    }
    public withDescription(description: string): ShowTemplateDetailResponse {
        this['description'] = description;
        return this;
    }
    public withParameter(parameter: Array<TemplateParam>): ShowTemplateDetailResponse {
        this['parameter'] = parameter;
        return this;
    }
    public withFlow(flow: { [key: string]: { [key: string]: string; }; }): ShowTemplateDetailResponse {
        this['flow'] = flow;
        return this;
    }
    public withStates(states: { [key: string]: TemplateState; }): ShowTemplateDetailResponse {
        this['states'] = states;
        return this;
    }
}