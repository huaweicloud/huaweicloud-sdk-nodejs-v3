import { TaskSteps } from './TaskSteps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEngineJobResponse extends SdkResponse {
    public id?: number;
    private 'engine_id'?: string | undefined;
    public type?: ShowEngineJobResponseTypeEnum;
    public description?: string;
    public status?: ShowEngineJobResponseStatusEnum;
    public scheduling?: number;
    private 'create_user'?: string | undefined;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
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
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId() {
        return this['engine_id'];
    }
    public withType(type: ShowEngineJobResponseTypeEnum): ShowEngineJobResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowEngineJobResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ShowEngineJobResponseStatusEnum): ShowEngineJobResponse {
        this['status'] = status;
        return this;
    }
    public withScheduling(scheduling: number): ShowEngineJobResponse {
        this['scheduling'] = scheduling;
        return this;
    }
    public withCreateUser(createUser: string): ShowEngineJobResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser() {
        return this['create_user'];
    }
    public withStartTime(startTime: number): ShowEngineJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowEngineJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
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
