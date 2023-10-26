import { ApproveInfo } from './ApproveInfo';
import { Parameter } from './Parameter';
import { RateControl } from './RateControl';
import { Step } from './Step';


export class Job {
    public id?: string;
    public name?: string;
    private 'create_time'?: number;
    private 'create_by'?: string;
    private 'update_time'?: number;
    private 'update_by'?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    public steps?: Array<Step>;
    public parameters?: Array<Parameter>;
    private 'rate_control'?: RateControl;
    private 'approve_info'?: ApproveInfo;
    private 'is_latest_version'?: boolean;
    private 'version_number'?: number;
    public constructor(name?: string, enterpriseProjectId?: string, projectId?: string, steps?: Array<Step>, parameters?: Array<Parameter>, rateControl?: RateControl, approveInfo?: ApproveInfo) { 
        this['name'] = name;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['project_id'] = projectId;
        this['steps'] = steps;
        this['parameters'] = parameters;
        this['rate_control'] = rateControl;
        this['approve_info'] = approveInfo;
    }
    public withId(id: string): Job {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Job {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): Job {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateBy(createBy: string): Job {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateTime(updateTime: number): Job {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateBy(updateBy: string): Job {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withDescription(description: string): Job {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Job {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): Job {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSteps(steps: Array<Step>): Job {
        this['steps'] = steps;
        return this;
    }
    public withParameters(parameters: Array<Parameter>): Job {
        this['parameters'] = parameters;
        return this;
    }
    public withRateControl(rateControl: RateControl): Job {
        this['rate_control'] = rateControl;
        return this;
    }
    public set rateControl(rateControl: RateControl  | undefined) {
        this['rate_control'] = rateControl;
    }
    public get rateControl(): RateControl | undefined {
        return this['rate_control'];
    }
    public withApproveInfo(approveInfo: ApproveInfo): Job {
        this['approve_info'] = approveInfo;
        return this;
    }
    public set approveInfo(approveInfo: ApproveInfo  | undefined) {
        this['approve_info'] = approveInfo;
    }
    public get approveInfo(): ApproveInfo | undefined {
        return this['approve_info'];
    }
    public withIsLatestVersion(isLatestVersion: boolean): Job {
        this['is_latest_version'] = isLatestVersion;
        return this;
    }
    public set isLatestVersion(isLatestVersion: boolean  | undefined) {
        this['is_latest_version'] = isLatestVersion;
    }
    public get isLatestVersion(): boolean | undefined {
        return this['is_latest_version'];
    }
    public withVersionNumber(versionNumber: number): Job {
        this['version_number'] = versionNumber;
        return this;
    }
    public set versionNumber(versionNumber: number  | undefined) {
        this['version_number'] = versionNumber;
    }
    public get versionNumber(): number | undefined {
        return this['version_number'];
    }
}