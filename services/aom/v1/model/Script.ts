import { ApproveInfo } from './ApproveInfo';
import { RateControl } from './RateControl';


export class Script {
    private 'approve_info'?: ApproveInfo;
    private 'create_by'?: string;
    private 'create_time'?: number;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public id?: string;
    public name?: string;
    private 'online_exist_status'?: boolean;
    private 'online_id'?: string;
    private 'project_id'?: string;
    private 'rate_control'?: RateControl;
    private 'script_language'?: string;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor(name?: string, scriptLanguage?: string) { 
        this['name'] = name;
        this['script_language'] = scriptLanguage;
    }
    public withApproveInfo(approveInfo: ApproveInfo): Script {
        this['approve_info'] = approveInfo;
        return this;
    }
    public set approveInfo(approveInfo: ApproveInfo  | undefined) {
        this['approve_info'] = approveInfo;
    }
    public get approveInfo(): ApproveInfo | undefined {
        return this['approve_info'];
    }
    public withCreateBy(createBy: string): Script {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): Script {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): Script {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Script {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): Script {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Script {
        this['name'] = name;
        return this;
    }
    public withOnlineExistStatus(onlineExistStatus: boolean): Script {
        this['online_exist_status'] = onlineExistStatus;
        return this;
    }
    public set onlineExistStatus(onlineExistStatus: boolean  | undefined) {
        this['online_exist_status'] = onlineExistStatus;
    }
    public get onlineExistStatus(): boolean | undefined {
        return this['online_exist_status'];
    }
    public withOnlineId(onlineId: string): Script {
        this['online_id'] = onlineId;
        return this;
    }
    public set onlineId(onlineId: string  | undefined) {
        this['online_id'] = onlineId;
    }
    public get onlineId(): string | undefined {
        return this['online_id'];
    }
    public withProjectId(projectId: string): Script {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRateControl(rateControl: RateControl): Script {
        this['rate_control'] = rateControl;
        return this;
    }
    public set rateControl(rateControl: RateControl  | undefined) {
        this['rate_control'] = rateControl;
    }
    public get rateControl(): RateControl | undefined {
        return this['rate_control'];
    }
    public withScriptLanguage(scriptLanguage: string): Script {
        this['script_language'] = scriptLanguage;
        return this;
    }
    public set scriptLanguage(scriptLanguage: string  | undefined) {
        this['script_language'] = scriptLanguage;
    }
    public get scriptLanguage(): string | undefined {
        return this['script_language'];
    }
    public withUpdateBy(updateBy: string): Script {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): Script {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}