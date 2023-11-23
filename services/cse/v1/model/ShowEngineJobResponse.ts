import { TaskSteps } from './TaskSteps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineJobResponse extends SdkResponse {
    public id?: number;
    public engineId?: string;
    public type?: ShowEngineJobResponseTypeEnum | string;
    public description?: string;
    public status?: ShowEngineJobResponseStatusEnum | string;
    public scheduling?: number;
    public createUser?: string;
    public startTime?: number;
    public endTime?: number;
    public context?: string;
    public tasks?: Array<TaskSteps>;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowEngineJobResponse {
        this['id'] = id;
        return this;
    }
    public withEngineId(engineId: string): ShowEngineJobResponse {
        this['engineId'] = engineId;
        return this;
    }
    public withType(type: ShowEngineJobResponseTypeEnum | string): ShowEngineJobResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowEngineJobResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ShowEngineJobResponseStatusEnum | string): ShowEngineJobResponse {
        this['status'] = status;
        return this;
    }
    public withScheduling(scheduling: number): ShowEngineJobResponse {
        this['scheduling'] = scheduling;
        return this;
    }
    public withCreateUser(createUser: string): ShowEngineJobResponse {
        this['createUser'] = createUser;
        return this;
    }
    public withStartTime(startTime: number): ShowEngineJobResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): ShowEngineJobResponse {
        this['endTime'] = endTime;
        return this;
    }
    public withContext(context: string): ShowEngineJobResponse {
        this['context'] = context;
        return this;
    }
    public withTasks(tasks: Array<TaskSteps>): ShowEngineJobResponse {
        this['tasks'] = tasks;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineJobResponseTypeEnum {
    CREATE = 'Create',
    DELETE = 'Delete',
    UPGRADE = 'Upgrade',
    MODIFY = 'Modify'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowEngineJobResponseStatusEnum {
    INIT = 'Init',
    EXECUTING = 'Executing',
    ERROR = 'Error',
    TIMEOUT = 'Timeout',
    FINISHED = 'Finished'
}
