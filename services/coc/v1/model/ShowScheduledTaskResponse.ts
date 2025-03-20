import { MessageNotification } from './MessageNotification';
import { TriggerTime } from './TriggerTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScheduledTaskResponse extends SdkResponse {
    public id?: string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'agency_name'?: string;
    private 'trigger_time'?: TriggerTime;
    private 'version_no'?: string;
    private 'task_type'?: object;
    private 'associated_task_id'?: string;
    private 'associated_task_name'?: string;
    private 'associated_task_name_en'?: string;
    private 'associated_task_type'?: string;
    private 'runbook_instance_mode'?: string;
    private 'risk_level'?: string;
    private 'input_param'?: string;
    private 'enable_approve'?: boolean;
    private 'reviewer_notification'?: MessageNotification;
    private 'created_user_name'?: string;
    private 'reviewer_user_name'?: string;
    private 'approve_status'?: object;
    private 'approve_comments'?: string;
    private 'target_instances'?: string;
    private 'enable_message_notification'?: boolean;
    private 'message_notification'?: MessageNotification;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowScheduledTaskResponse {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowScheduledTaskResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ShowScheduledTaskResponse {
        this['name'] = name;
        return this;
    }
    public withAgencyName(agencyName: string): ShowScheduledTaskResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withTriggerTime(triggerTime: TriggerTime): ShowScheduledTaskResponse {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: TriggerTime  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): TriggerTime | undefined {
        return this['trigger_time'];
    }
    public withVersionNo(versionNo: string): ShowScheduledTaskResponse {
        this['version_no'] = versionNo;
        return this;
    }
    public set versionNo(versionNo: string  | undefined) {
        this['version_no'] = versionNo;
    }
    public get versionNo(): string | undefined {
        return this['version_no'];
    }
    public withTaskType(taskType: object): ShowScheduledTaskResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: object  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): object | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskId(associatedTaskId: string): ShowScheduledTaskResponse {
        this['associated_task_id'] = associatedTaskId;
        return this;
    }
    public set associatedTaskId(associatedTaskId: string  | undefined) {
        this['associated_task_id'] = associatedTaskId;
    }
    public get associatedTaskId(): string | undefined {
        return this['associated_task_id'];
    }
    public withAssociatedTaskName(associatedTaskName: string): ShowScheduledTaskResponse {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withAssociatedTaskNameEn(associatedTaskNameEn: string): ShowScheduledTaskResponse {
        this['associated_task_name_en'] = associatedTaskNameEn;
        return this;
    }
    public set associatedTaskNameEn(associatedTaskNameEn: string  | undefined) {
        this['associated_task_name_en'] = associatedTaskNameEn;
    }
    public get associatedTaskNameEn(): string | undefined {
        return this['associated_task_name_en'];
    }
    public withAssociatedTaskType(associatedTaskType: string): ShowScheduledTaskResponse {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): string | undefined {
        return this['associated_task_type'];
    }
    public withRunbookInstanceMode(runbookInstanceMode: string): ShowScheduledTaskResponse {
        this['runbook_instance_mode'] = runbookInstanceMode;
        return this;
    }
    public set runbookInstanceMode(runbookInstanceMode: string  | undefined) {
        this['runbook_instance_mode'] = runbookInstanceMode;
    }
    public get runbookInstanceMode(): string | undefined {
        return this['runbook_instance_mode'];
    }
    public withRiskLevel(riskLevel: string): ShowScheduledTaskResponse {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withInputParam(inputParam: string): ShowScheduledTaskResponse {
        this['input_param'] = inputParam;
        return this;
    }
    public set inputParam(inputParam: string  | undefined) {
        this['input_param'] = inputParam;
    }
    public get inputParam(): string | undefined {
        return this['input_param'];
    }
    public withEnableApprove(enableApprove: boolean): ShowScheduledTaskResponse {
        this['enable_approve'] = enableApprove;
        return this;
    }
    public set enableApprove(enableApprove: boolean  | undefined) {
        this['enable_approve'] = enableApprove;
    }
    public get enableApprove(): boolean | undefined {
        return this['enable_approve'];
    }
    public withReviewerNotification(reviewerNotification: MessageNotification): ShowScheduledTaskResponse {
        this['reviewer_notification'] = reviewerNotification;
        return this;
    }
    public set reviewerNotification(reviewerNotification: MessageNotification  | undefined) {
        this['reviewer_notification'] = reviewerNotification;
    }
    public get reviewerNotification(): MessageNotification | undefined {
        return this['reviewer_notification'];
    }
    public withCreatedUserName(createdUserName: string): ShowScheduledTaskResponse {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withReviewerUserName(reviewerUserName: string): ShowScheduledTaskResponse {
        this['reviewer_user_name'] = reviewerUserName;
        return this;
    }
    public set reviewerUserName(reviewerUserName: string  | undefined) {
        this['reviewer_user_name'] = reviewerUserName;
    }
    public get reviewerUserName(): string | undefined {
        return this['reviewer_user_name'];
    }
    public withApproveStatus(approveStatus: object): ShowScheduledTaskResponse {
        this['approve_status'] = approveStatus;
        return this;
    }
    public set approveStatus(approveStatus: object  | undefined) {
        this['approve_status'] = approveStatus;
    }
    public get approveStatus(): object | undefined {
        return this['approve_status'];
    }
    public withApproveComments(approveComments: string): ShowScheduledTaskResponse {
        this['approve_comments'] = approveComments;
        return this;
    }
    public set approveComments(approveComments: string  | undefined) {
        this['approve_comments'] = approveComments;
    }
    public get approveComments(): string | undefined {
        return this['approve_comments'];
    }
    public withTargetInstances(targetInstances: string): ShowScheduledTaskResponse {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: string  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): string | undefined {
        return this['target_instances'];
    }
    public withEnableMessageNotification(enableMessageNotification: boolean): ShowScheduledTaskResponse {
        this['enable_message_notification'] = enableMessageNotification;
        return this;
    }
    public set enableMessageNotification(enableMessageNotification: boolean  | undefined) {
        this['enable_message_notification'] = enableMessageNotification;
    }
    public get enableMessageNotification(): boolean | undefined {
        return this['enable_message_notification'];
    }
    public withMessageNotification(messageNotification: MessageNotification): ShowScheduledTaskResponse {
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