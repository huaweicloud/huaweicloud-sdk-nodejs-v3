import { ApproveInfo } from './ApproveInfo';
import { Node } from './Node';
import { Parameter } from './Parameter';
import { RateControl } from './RateControl';
import { Step } from './Step';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchTemplateByIdResponse extends SdkResponse {
    private 'approve_info'?: ApproveInfo;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'enterprise_project_id'?: string;
    public id?: string;
    private 'is_collect'?: boolean;
    private 'is_publish'?: boolean;
    private 'job_id'?: string;
    private 'job_version'?: number;
    public name?: string;
    private 'need_synchronize'?: boolean;
    public nodes?: Array<Node>;
    public parameters?: Array<Parameter>;
    private 'project_id'?: string;
    public quote?: Array<string>;
    private 'rate_control'?: RateControl;
    private 'share_type'?: string;
    public steps?: Array<Step>;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public version?: string;
    public constructor() { 
        super();
    }
    public withApproveInfo(approveInfo: ApproveInfo): SearchTemplateByIdResponse {
        this['approve_info'] = approveInfo;
        return this;
    }
    public set approveInfo(approveInfo: ApproveInfo  | undefined) {
        this['approve_info'] = approveInfo;
    }
    public get approveInfo(): ApproveInfo | undefined {
        return this['approve_info'];
    }
    public withCreateBy(createBy: string): SearchTemplateByIdResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): SearchTemplateByIdResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchTemplateByIdResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): SearchTemplateByIdResponse {
        this['id'] = id;
        return this;
    }
    public withIsCollect(isCollect: boolean): SearchTemplateByIdResponse {
        this['is_collect'] = isCollect;
        return this;
    }
    public set isCollect(isCollect: boolean  | undefined) {
        this['is_collect'] = isCollect;
    }
    public get isCollect(): boolean | undefined {
        return this['is_collect'];
    }
    public withIsPublish(isPublish: boolean): SearchTemplateByIdResponse {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withJobId(jobId: string): SearchTemplateByIdResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobVersion(jobVersion: number): SearchTemplateByIdResponse {
        this['job_version'] = jobVersion;
        return this;
    }
    public set jobVersion(jobVersion: number  | undefined) {
        this['job_version'] = jobVersion;
    }
    public get jobVersion(): number | undefined {
        return this['job_version'];
    }
    public withName(name: string): SearchTemplateByIdResponse {
        this['name'] = name;
        return this;
    }
    public withNeedSynchronize(needSynchronize: boolean): SearchTemplateByIdResponse {
        this['need_synchronize'] = needSynchronize;
        return this;
    }
    public set needSynchronize(needSynchronize: boolean  | undefined) {
        this['need_synchronize'] = needSynchronize;
    }
    public get needSynchronize(): boolean | undefined {
        return this['need_synchronize'];
    }
    public withNodes(nodes: Array<Node>): SearchTemplateByIdResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withParameters(parameters: Array<Parameter>): SearchTemplateByIdResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withProjectId(projectId: string): SearchTemplateByIdResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQuote(quote: Array<string>): SearchTemplateByIdResponse {
        this['quote'] = quote;
        return this;
    }
    public withRateControl(rateControl: RateControl): SearchTemplateByIdResponse {
        this['rate_control'] = rateControl;
        return this;
    }
    public set rateControl(rateControl: RateControl  | undefined) {
        this['rate_control'] = rateControl;
    }
    public get rateControl(): RateControl | undefined {
        return this['rate_control'];
    }
    public withShareType(shareType: string): SearchTemplateByIdResponse {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withSteps(steps: Array<Step>): SearchTemplateByIdResponse {
        this['steps'] = steps;
        return this;
    }
    public withUpdateBy(updateBy: string): SearchTemplateByIdResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): SearchTemplateByIdResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): SearchTemplateByIdResponse {
        this['version'] = version;
        return this;
    }
}