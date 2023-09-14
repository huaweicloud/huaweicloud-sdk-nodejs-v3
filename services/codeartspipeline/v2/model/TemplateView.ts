import { TemplateParam } from './TemplateParam';
import { TemplateState } from './TemplateState';


export class TemplateView {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    private 'template_url'?: string;
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
    private 'can_update'?: boolean;
    private 'can_delete'?: boolean;
    private 'need_hub'?: boolean;
    public constructor(templateId?: string, templateName?: string, templateType?: string, templateUrl?: string, userId?: string, userName?: string, domainId?: string, domainName?: string, isBuildIn?: boolean, region?: string, projectId?: string, projectName?: string, createTime?: string, lastModifyTime?: string, isWatch?: boolean, description?: string, parameter?: Array<TemplateParam>, flow?: { [key: string]: { [key: string]: string; }; }, states?: { [key: string]: TemplateState; }, canUpdate?: boolean, canDelete?: boolean, needHub?: boolean) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
        this['template_url'] = templateUrl;
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['domain_id'] = domainId;
        this['domain_name'] = domainName;
        this['is_build_in'] = isBuildIn;
        this['region'] = region;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
        this['create_time'] = createTime;
        this['last_modify_time'] = lastModifyTime;
        this['is_watch'] = isWatch;
        this['description'] = description;
        this['parameter'] = parameter;
        this['flow'] = flow;
        this['states'] = states;
        this['can_update'] = canUpdate;
        this['can_delete'] = canDelete;
        this['need_hub'] = needHub;
    }
    public withTemplateId(templateId: string): TemplateView {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): TemplateView {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): TemplateView {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withTemplateUrl(templateUrl: string): TemplateView {
        this['template_url'] = templateUrl;
        return this;
    }
    public set templateUrl(templateUrl: string  | undefined) {
        this['template_url'] = templateUrl;
    }
    public get templateUrl(): string | undefined {
        return this['template_url'];
    }
    public withUserId(userId: string): TemplateView {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): TemplateView {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): TemplateView {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): TemplateView {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIsBuildIn(isBuildIn: boolean): TemplateView {
        this['is_build_in'] = isBuildIn;
        return this;
    }
    public set isBuildIn(isBuildIn: boolean  | undefined) {
        this['is_build_in'] = isBuildIn;
    }
    public get isBuildIn(): boolean | undefined {
        return this['is_build_in'];
    }
    public withRegion(region: string): TemplateView {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): TemplateView {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): TemplateView {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withCreateTime(createTime: string): TemplateView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): TemplateView {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
    public withIsWatch(isWatch: boolean): TemplateView {
        this['is_watch'] = isWatch;
        return this;
    }
    public set isWatch(isWatch: boolean  | undefined) {
        this['is_watch'] = isWatch;
    }
    public get isWatch(): boolean | undefined {
        return this['is_watch'];
    }
    public withDescription(description: string): TemplateView {
        this['description'] = description;
        return this;
    }
    public withParameter(parameter: Array<TemplateParam>): TemplateView {
        this['parameter'] = parameter;
        return this;
    }
    public withFlow(flow: { [key: string]: { [key: string]: string; }; }): TemplateView {
        this['flow'] = flow;
        return this;
    }
    public withStates(states: { [key: string]: TemplateState; }): TemplateView {
        this['states'] = states;
        return this;
    }
    public withCanUpdate(canUpdate: boolean): TemplateView {
        this['can_update'] = canUpdate;
        return this;
    }
    public set canUpdate(canUpdate: boolean  | undefined) {
        this['can_update'] = canUpdate;
    }
    public get canUpdate(): boolean | undefined {
        return this['can_update'];
    }
    public withCanDelete(canDelete: boolean): TemplateView {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withNeedHub(needHub: boolean): TemplateView {
        this['need_hub'] = needHub;
        return this;
    }
    public set needHub(needHub: boolean  | undefined) {
        this['need_hub'] = needHub;
    }
    public get needHub(): boolean | undefined {
        return this['need_hub'];
    }
}