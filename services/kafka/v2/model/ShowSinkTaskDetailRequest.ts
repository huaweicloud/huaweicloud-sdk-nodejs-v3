

export class ShowSinkTaskDetailRequest {
    private 'connector_id': string | undefined;
    private 'task_id': string | undefined;
    private 'topic-info'?: ShowSinkTaskDetailRequestTopicInfoEnum | undefined;
    public constructor(connectorId?: any, taskId?: any) { 
        this['connector_id'] = connectorId;
        this['task_id'] = taskId;
    }
    public withConnectorId(connectorId: string): ShowSinkTaskDetailRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
    public withTaskId(taskId: string): ShowSinkTaskDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTopicInfo(topicInfo: ShowSinkTaskDetailRequestTopicInfoEnum): ShowSinkTaskDetailRequest {
        this['topic-info'] = topicInfo;
        return this;
    }
    public set topicInfo(topicInfo: ShowSinkTaskDetailRequestTopicInfoEnum | undefined) {
        this['topic-info'] = topicInfo;
    }
    public get topicInfo() {
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
