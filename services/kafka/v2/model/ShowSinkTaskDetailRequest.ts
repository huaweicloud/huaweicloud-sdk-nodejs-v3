

export class ShowSinkTaskDetailRequest {
    private 'connector_id'?: string;
    private 'task_id'?: string;
    private 'topic-info'?: ShowSinkTaskDetailRequestTopicInfoEnum | string;
    public constructor(connectorId?: string, taskId?: string) { 
        this['connector_id'] = connectorId;
        this['task_id'] = taskId;
    }
    public withConnectorId(connectorId: string): ShowSinkTaskDetailRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withTaskId(taskId: string): ShowSinkTaskDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTopicInfo(topicInfo: ShowSinkTaskDetailRequestTopicInfoEnum | string): ShowSinkTaskDetailRequest {
        this['topic-info'] = topicInfo;
        return this;
    }
    public set topicInfo(topicInfo: ShowSinkTaskDetailRequestTopicInfoEnum | string  | undefined) {
        this['topic-info'] = topicInfo;
    }
    public get topicInfo(): ShowSinkTaskDetailRequestTopicInfoEnum | string | undefined {
        return this['topic-info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSinkTaskDetailRequestTopicInfoEnum {
    TRUE = 'true',
    FALSE = 'false'
}
