

export class CheckPutEventsResult {
    private 'channel_id'?: string;
    private 'source_name'?: string;
    private 'check_result'?: boolean;
    private 'check_detail'?: string;
    public constructor() { 
    }
    public withChannelId(channelId: string): CheckPutEventsResult {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withSourceName(sourceName: string): CheckPutEventsResult {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withCheckResult(checkResult: boolean): CheckPutEventsResult {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: boolean  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): boolean | undefined {
        return this['check_result'];
    }
    public withCheckDetail(checkDetail: string): CheckPutEventsResult {
        this['check_detail'] = checkDetail;
        return this;
    }
    public set checkDetail(checkDetail: string  | undefined) {
        this['check_detail'] = checkDetail;
    }
    public get checkDetail(): string | undefined {
        return this['check_detail'];
    }
}