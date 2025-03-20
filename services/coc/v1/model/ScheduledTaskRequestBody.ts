import { MessageNotification } from './MessageNotification';
import { ScheduleInstance } from './ScheduleInstance';
import { TicketInfo } from './TicketInfo';
import { TicketInformation } from './TicketInformation';
import { TriggerTime } from './TriggerTime';


export class ScheduledTaskRequestBody {
    private 'ticket_infos'?: Array<TicketInfo>;
    public name?: string;
    private 'enterprise_project_id'?: string;
    private 'agency_name'?: string;
    private 'version_no'?: string;
    private 'trigger_time'?: TriggerTime;
    private 'task_type'?: ScheduledTaskRequestBodyTaskTypeEnum | string;
    private 'associated_task_id'?: string;
    private 'associated_task_type'?: ScheduledTaskRequestBodyAssociatedTaskTypeEnum | string;
    private 'associated_task_name'?: string;
    private 'associated_task_name_en'?: string;
    private 'associated_task_enterprise_project_id'?: string;
    private 'runbook_instance_mode'?: ScheduledTaskRequestBodyRunbookInstanceModeEnum | string;
    private 'risk_level'?: ScheduledTaskRequestBodyRiskLevelEnum | string;
    private 'input_param'?: { [key: string]: string; };
    private 'target_instances'?: Array<ScheduleInstance>;
    private 'enable_approve'?: boolean;
    private 'reviewer_notification'?: MessageNotification;
    private 'reviewer_user_name'?: string;
    private 'enable_message_notification'?: boolean;
    private 'message_notification'?: MessageNotification;
    public constructor(name?: string, versionNo?: string, triggerTime?: TriggerTime, taskType?: string, associatedTaskId?: string, associatedTaskType?: string, associatedTaskName?: string, riskLevel?: string, inputParam?: { [key: string]: string; }, targetInstances?: Array<ScheduleInstance>, enableApprove?: boolean, enableMessageNotification?: boolean) { 
        this['name'] = name;
        this['version_no'] = versionNo;
        this['trigger_time'] = triggerTime;
        this['task_type'] = taskType;
        this['associated_task_id'] = associatedTaskId;
        this['associated_task_type'] = associatedTaskType;
        this['associated_task_name'] = associatedTaskName;
        this['risk_level'] = riskLevel;
        this['input_param'] = inputParam;
        this['target_instances'] = targetInstances;
        this['enable_approve'] = enableApprove;
        this['enable_message_notification'] = enableMessageNotification;
    }
    public withTicketInfos(ticketInfos: Array<TicketInfo>): ScheduledTaskRequestBody {
        this['ticket_infos'] = ticketInfos;
        return this;
    }
    public set ticketInfos(ticketInfos: Array<TicketInfo>  | undefined) {
        this['ticket_infos'] = ticketInfos;
    }
    public get ticketInfos(): Array<TicketInfo> | undefined {
        return this['ticket_infos'];
    }
    public withName(name: string): ScheduledTaskRequestBody {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScheduledTaskRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAgencyName(agencyName: string): ScheduledTaskRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withVersionNo(versionNo: string): ScheduledTaskRequestBody {
        this['version_no'] = versionNo;
        return this;
    }
    public set versionNo(versionNo: string  | undefined) {
        this['version_no'] = versionNo;
    }
    public get versionNo(): string | undefined {
        return this['version_no'];
    }
    public withTriggerTime(triggerTime: TriggerTime): ScheduledTaskRequestBody {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: TriggerTime  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): TriggerTime | undefined {
        return this['trigger_time'];
    }
    public withTaskType(taskType: ScheduledTaskRequestBodyTaskTypeEnum | string): ScheduledTaskRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ScheduledTaskRequestBodyTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ScheduledTaskRequestBodyTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskId(associatedTaskId: string): ScheduledTaskRequestBody {
        this['associated_task_id'] = associatedTaskId;
        return this;
    }
    public set associatedTaskId(associatedTaskId: string  | undefined) {
        this['associated_task_id'] = associatedTaskId;
    }
    public get associatedTaskId(): string | undefined {
        return this['associated_task_id'];
    }
    public withAssociatedTaskType(associatedTaskType: ScheduledTaskRequestBodyAssociatedTaskTypeEnum | string): ScheduledTaskRequestBody {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: ScheduledTaskRequestBodyAssociatedTaskTypeEnum | string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): ScheduledTaskRequestBodyAssociatedTaskTypeEnum | string | undefined {
        return this['associated_task_type'];
    }
    public withAssociatedTaskName(associatedTaskName: string): ScheduledTaskRequestBody {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withAssociatedTaskNameEn(associatedTaskNameEn: string): ScheduledTaskRequestBody {
        this['associated_task_name_en'] = associatedTaskNameEn;
        return this;
    }
    public set associatedTaskNameEn(associatedTaskNameEn: string  | undefined) {
        this['associated_task_name_en'] = associatedTaskNameEn;
    }
    public get associatedTaskNameEn(): string | undefined {
        return this['associated_task_name_en'];
    }
    public withAssociatedTaskEnterpriseProjectId(associatedTaskEnterpriseProjectId: string): ScheduledTaskRequestBody {
        this['associated_task_enterprise_project_id'] = associatedTaskEnterpriseProjectId;
        return this;
    }
    public set associatedTaskEnterpriseProjectId(associatedTaskEnterpriseProjectId: string  | undefined) {
        this['associated_task_enterprise_project_id'] = associatedTaskEnterpriseProjectId;
    }
    public get associatedTaskEnterpriseProjectId(): string | undefined {
        return this['associated_task_enterprise_project_id'];
    }
    public withRunbookInstanceMode(runbookInstanceMode: ScheduledTaskRequestBodyRunbookInstanceModeEnum | string): ScheduledTaskRequestBody {
        this['runbook_instance_mode'] = runbookInstanceMode;
        return this;
    }
    public set runbookInstanceMode(runbookInstanceMode: ScheduledTaskRequestBodyRunbookInstanceModeEnum | string  | undefined) {
        this['runbook_instance_mode'] = runbookInstanceMode;
    }
    public get runbookInstanceMode(): ScheduledTaskRequestBodyRunbookInstanceModeEnum | string | undefined {
        return this['runbook_instance_mode'];
    }
    public withRiskLevel(riskLevel: ScheduledTaskRequestBodyRiskLevelEnum | string): ScheduledTaskRequestBody {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ScheduledTaskRequestBodyRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ScheduledTaskRequestBodyRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withInputParam(inputParam: { [key: string]: string; }): ScheduledTaskRequestBody {
        this['input_param'] = inputParam;
        return this;
    }
    public set inputParam(inputParam: { [key: string]: string; }  | undefined) {
        this['input_param'] = inputParam;
    }
    public get inputParam(): { [key: string]: string; } | undefined {
        return this['input_param'];
    }
    public withTargetInstances(targetInstances: Array<ScheduleInstance>): ScheduledTaskRequestBody {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: Array<ScheduleInstance>  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): Array<ScheduleInstance> | undefined {
        return this['target_instances'];
    }
    public withEnableApprove(enableApprove: boolean): ScheduledTaskRequestBody {
        this['enable_approve'] = enableApprove;
        return this;
    }
    public set enableApprove(enableApprove: boolean  | undefined) {
        this['enable_approve'] = enableApprove;
    }
    public get enableApprove(): boolean | undefined {
        return this['enable_approve'];
    }
    public withReviewerNotification(reviewerNotification: MessageNotification): ScheduledTaskRequestBody {
        this['reviewer_notification'] = reviewerNotification;
        return this;
    }
    public set reviewerNotification(reviewerNotification: MessageNotification  | undefined) {
        this['reviewer_notification'] = reviewerNotification;
    }
    public get reviewerNotification(): MessageNotification | undefined {
        return this['reviewer_notification'];
    }
    public withReviewerUserName(reviewerUserName: string): ScheduledTaskRequestBody {
        this['reviewer_user_name'] = reviewerUserName;
        return this;
    }
    public set reviewerUserName(reviewerUserName: string  | undefined) {
        this['reviewer_user_name'] = reviewerUserName;
    }
    public get reviewerUserName(): string | undefined {
        return this['reviewer_user_name'];
    }
    public withEnableMessageNotification(enableMessageNotification: boolean): ScheduledTaskRequestBody {
        this['enable_message_notification'] = enableMessageNotification;
        return this;
    }
    public set enableMessageNotification(enableMessageNotification: boolean  | undefined) {
        this['enable_message_notification'] = enableMessageNotification;
    }
    public get enableMessageNotification(): boolean | undefined {
        return this['enable_message_notification'];
    }
    public withMessageNotification(messageNotification: MessageNotification): ScheduledTaskRequestBody {
        this['message_notification'] = messageNotification;
        return this;
    }
    public set messageNotification(messageNotification: MessageNotification  | undefined) {
        this['message_notification'] = messageNotification;
    }
    public get messageNotification(): MessageNotification | undefined {
        return this['message_notification'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduledTaskRequestBodyTaskTypeEnum {
    RUNBOOK = 'RUNBOOK',
    SCRIPT = 'SCRIPT'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledTaskRequestBodyAssociatedTaskTypeEnum {
    COMMUNAL = 'COMMUNAL',
    CUSTOMIZATION = 'CUSTOMIZATION'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledTaskRequestBodyRunbookInstanceModeEnum {
    SAME = 'SAME',
    DIFF = 'DIFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledTaskRequestBodyRiskLevelEnum {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
