

export class OpenApiParaForPublish {
    private 'api_id'?: string;
    public action?: OpenApiParaForPublishActionEnum | string;
    public time?: string;
    public constructor() { 
    }
    public withApiId(apiId: string): OpenApiParaForPublish {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withAction(action: OpenApiParaForPublishActionEnum | string): OpenApiParaForPublish {
        this['action'] = action;
        return this;
    }
    public withTime(time: string): OpenApiParaForPublish {
        this['time'] = time;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenApiParaForPublishActionEnum {
    PUBLISH = 'PUBLISH',
    UNPUBLISH = 'UNPUBLISH',
    STOP = 'STOP',
    RECOVER = 'RECOVER'
}
