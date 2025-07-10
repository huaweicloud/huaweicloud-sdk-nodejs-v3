

export class SubTaskInfoDTO {
    private 'sub_task_type'?: string;
    private 'sub_associated_task_id'?: string;
    private 'sub_associated_task_name'?: string;
    private 'sub_associated_task_type'?: string;
    public constructor() { 
    }
    public withSubTaskType(subTaskType: string): SubTaskInfoDTO {
        this['sub_task_type'] = subTaskType;
        return this;
    }
    public set subTaskType(subTaskType: string  | undefined) {
        this['sub_task_type'] = subTaskType;
    }
    public get subTaskType(): string | undefined {
        return this['sub_task_type'];
    }
    public withSubAssociatedTaskId(subAssociatedTaskId: string): SubTaskInfoDTO {
        this['sub_associated_task_id'] = subAssociatedTaskId;
        return this;
    }
    public set subAssociatedTaskId(subAssociatedTaskId: string  | undefined) {
        this['sub_associated_task_id'] = subAssociatedTaskId;
    }
    public get subAssociatedTaskId(): string | undefined {
        return this['sub_associated_task_id'];
    }
    public withSubAssociatedTaskName(subAssociatedTaskName: string): SubTaskInfoDTO {
        this['sub_associated_task_name'] = subAssociatedTaskName;
        return this;
    }
    public set subAssociatedTaskName(subAssociatedTaskName: string  | undefined) {
        this['sub_associated_task_name'] = subAssociatedTaskName;
    }
    public get subAssociatedTaskName(): string | undefined {
        return this['sub_associated_task_name'];
    }
    public withSubAssociatedTaskType(subAssociatedTaskType: string): SubTaskInfoDTO {
        this['sub_associated_task_type'] = subAssociatedTaskType;
        return this;
    }
    public set subAssociatedTaskType(subAssociatedTaskType: string  | undefined) {
        this['sub_associated_task_type'] = subAssociatedTaskType;
    }
    public get subAssociatedTaskType(): string | undefined {
        return this['sub_associated_task_type'];
    }
}