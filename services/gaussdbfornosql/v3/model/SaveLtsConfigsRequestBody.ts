

export class SaveLtsConfigsRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'log_type'?: SaveLtsConfigsRequestBodyLogTypeEnum | string;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public constructor(instanceIds?: Array<string>, logType?: string, ltsGroupId?: string, ltsStreamId?: string) { 
        this['instance_ids'] = instanceIds;
        this['log_type'] = logType;
        this['lts_group_id'] = ltsGroupId;
        this['lts_stream_id'] = ltsStreamId;
    }
    public withInstanceIds(instanceIds: Array<string>): SaveLtsConfigsRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withLogType(logType: SaveLtsConfigsRequestBodyLogTypeEnum | string): SaveLtsConfigsRequestBody {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: SaveLtsConfigsRequestBodyLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): SaveLtsConfigsRequestBodyLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withLtsGroupId(ltsGroupId: string): SaveLtsConfigsRequestBody {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): SaveLtsConfigsRequestBody {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SaveLtsConfigsRequestBodyLogTypeEnum {
    SLOW_LOG = 'slow_log'
}
