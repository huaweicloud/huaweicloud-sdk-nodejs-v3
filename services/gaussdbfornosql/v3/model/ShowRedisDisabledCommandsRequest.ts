

export class ShowRedisDisabledCommandsRequest {
    private 'instance_id'?: string;
    public type?: ShowRedisDisabledCommandsRequestTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): ShowRedisDisabledCommandsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowRedisDisabledCommandsRequestTypeEnum | string): ShowRedisDisabledCommandsRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ShowRedisDisabledCommandsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRedisDisabledCommandsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRedisDisabledCommandsRequestTypeEnum {
    COMMAND = 'command',
    KEY = 'key'
}
