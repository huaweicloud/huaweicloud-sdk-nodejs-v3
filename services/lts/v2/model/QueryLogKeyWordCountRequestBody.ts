

export class QueryLogKeyWordCountRequestBody {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'step_interval': number | undefined;
    private 'group_id': string | undefined;
    private 'stream_id': string | undefined;
    private 'key_word': string | undefined;
    private 'is_iterative'?: boolean | undefined;
    public constructor(startTime?: any, endTime?: any, stepInterval?: any, groupId?: any, streamId?: any, keyWord?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['step_interval'] = stepInterval;
        this['group_id'] = groupId;
        this['stream_id'] = streamId;
        this['key_word'] = keyWord;
    }
    public withStartTime(startTime: string): QueryLogKeyWordCountRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryLogKeyWordCountRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStepInterval(stepInterval: number): QueryLogKeyWordCountRequestBody {
        this['step_interval'] = stepInterval;
        return this;
    }
    public set stepInterval(stepInterval: number | undefined) {
        this['step_interval'] = stepInterval;
    }
    public get stepInterval() {
        return this['step_interval'];
    }
    public withGroupId(groupId: string): QueryLogKeyWordCountRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStreamId(streamId: string): QueryLogKeyWordCountRequestBody {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
    public withKeyWord(keyWord: string): QueryLogKeyWordCountRequestBody {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
        return this['key_word'];
    }
    public withIsIterative(isIterative: boolean): QueryLogKeyWordCountRequestBody {
        this['is_iterative'] = isIterative;
        return this;
    }
    public set isIterative(isIterative: boolean | undefined) {
        this['is_iterative'] = isIterative;
    }
    public get isIterative() {
        return this['is_iterative'];
    }
}