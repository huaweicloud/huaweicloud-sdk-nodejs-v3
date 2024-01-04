import { TaskType } from './TaskType';
import { UpgradeWorkflowTaskStatus } from './UpgradeWorkflowTaskStatus';


export class PointStatus {
    public taskType?: TaskType;
    public taskID?: string;
    public status?: UpgradeWorkflowTaskStatus;
    public startTimeStamp?: string;
    public endTimeStamp?: string;
    public expireTimeStamp?: string;
    public constructor() { 
    }
    public withTaskType(taskType: TaskType): PointStatus {
        this['taskType'] = taskType;
        return this;
    }
    public withTaskID(taskID: string): PointStatus {
        this['taskID'] = taskID;
        return this;
    }
    public withStatus(status: UpgradeWorkflowTaskStatus): PointStatus {
        this['status'] = status;
        return this;
    }
    public withStartTimeStamp(startTimeStamp: string): PointStatus {
        this['startTimeStamp'] = startTimeStamp;
        return this;
    }
    public withEndTimeStamp(endTimeStamp: string): PointStatus {
        this['endTimeStamp'] = endTimeStamp;
        return this;
    }
    public withExpireTimeStamp(expireTimeStamp: string): PointStatus {
        this['expireTimeStamp'] = expireTimeStamp;
        return this;
    }
}