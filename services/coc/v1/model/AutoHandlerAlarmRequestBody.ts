import { AlarmScheduleInstance } from './AlarmScheduleInstance';
import { SubTaskInfoDTO } from './SubTaskInfoDTO';


export class AutoHandlerAlarmRequestBody {
    private 'task_type'?: string;
    private 'associated_task_id'?: string;
    private 'associated_task_type'?: string;
    private 'associated_task_name'?: string;
    private 'associated_task_enterprise_project_id'?: string;
    private 'runbook_instance_mode'?: string;
    private 'input_param'?: { [key: string]: string; };
    private 'target_instances'?: Array<AlarmScheduleInstance>;
    private 'region_id'?: string;
    private 'sub_task_info'?: SubTaskInfoDTO;
    public constructor(taskType?: string, associatedTaskId?: string, associatedTaskType?: string, associatedTaskName?: string, inputParam?: { [key: string]: string; }) { 
        this['task_type'] = taskType;
        this['associated_task_id'] = associatedTaskId;
        this['associated_task_type'] = associatedTaskType;
        this['associated_task_name'] = associatedTaskName;
        this['input_param'] = inputParam;
    }
    public withTaskType(taskType: string): AutoHandlerAlarmRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskId(associatedTaskId: string): AutoHandlerAlarmRequestBody {
        this['associated_task_id'] = associatedTaskId;
        return this;
    }
    public set associatedTaskId(associatedTaskId: string  | undefined) {
        this['associated_task_id'] = associatedTaskId;
    }
    public get associatedTaskId(): string | undefined {
        return this['associated_task_id'];
    }
    public withAssociatedTaskType(associatedTaskType: string): AutoHandlerAlarmRequestBody {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): string | undefined {
        return this['associated_task_type'];
    }
    public withAssociatedTaskName(associatedTaskName: string): AutoHandlerAlarmRequestBody {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withAssociatedTaskEnterpriseProjectId(associatedTaskEnterpriseProjectId: string): AutoHandlerAlarmRequestBody {
        this['associated_task_enterprise_project_id'] = associatedTaskEnterpriseProjectId;
        return this;
    }
    public set associatedTaskEnterpriseProjectId(associatedTaskEnterpriseProjectId: string  | undefined) {
        this['associated_task_enterprise_project_id'] = associatedTaskEnterpriseProjectId;
    }
    public get associatedTaskEnterpriseProjectId(): string | undefined {
        return this['associated_task_enterprise_project_id'];
    }
    public withRunbookInstanceMode(runbookInstanceMode: string): AutoHandlerAlarmRequestBody {
        this['runbook_instance_mode'] = runbookInstanceMode;
        return this;
    }
    public set runbookInstanceMode(runbookInstanceMode: string  | undefined) {
        this['runbook_instance_mode'] = runbookInstanceMode;
    }
    public get runbookInstanceMode(): string | undefined {
        return this['runbook_instance_mode'];
    }
    public withInputParam(inputParam: { [key: string]: string; }): AutoHandlerAlarmRequestBody {
        this['input_param'] = inputParam;
        return this;
    }
    public set inputParam(inputParam: { [key: string]: string; }  | undefined) {
        this['input_param'] = inputParam;
    }
    public get inputParam(): { [key: string]: string; } | undefined {
        return this['input_param'];
    }
    public withTargetInstances(targetInstances: Array<AlarmScheduleInstance>): AutoHandlerAlarmRequestBody {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: Array<AlarmScheduleInstance>  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): Array<AlarmScheduleInstance> | undefined {
        return this['target_instances'];
    }
    public withRegionId(regionId: string): AutoHandlerAlarmRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSubTaskInfo(subTaskInfo: SubTaskInfoDTO): AutoHandlerAlarmRequestBody {
        this['sub_task_info'] = subTaskInfo;
        return this;
    }
    public set subTaskInfo(subTaskInfo: SubTaskInfoDTO  | undefined) {
        this['sub_task_info'] = subTaskInfo;
    }
    public get subTaskInfo(): SubTaskInfoDTO | undefined {
        return this['sub_task_info'];
    }
}