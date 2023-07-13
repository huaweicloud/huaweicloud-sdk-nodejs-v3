

export class ResultsTopnBody {
    private 'index_traffic': number | undefined;
    public storage: number;
    private 'write_traffic': number | undefined;
    private 'log_group_id': string | undefined;
    private 'log_group_name': string | undefined;
    private 'log_stream_id'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public constructor(indexTraffic?: any, storage?: any, writeTraffic?: any, logGroupId?: any, logGroupName?: any) { 
        this['index_traffic'] = indexTraffic;
        this['storage'] = storage;
        this['write_traffic'] = writeTraffic;
        this['log_group_id'] = logGroupId;
        this['log_group_name'] = logGroupName;
    }
    public withIndexTraffic(indexTraffic: number): ResultsTopnBody {
        this['index_traffic'] = indexTraffic;
        return this;
    }
    public set indexTraffic(indexTraffic: number | undefined) {
        this['index_traffic'] = indexTraffic;
    }
    public get indexTraffic() {
        return this['index_traffic'];
    }
    public withStorage(storage: number): ResultsTopnBody {
        this['storage'] = storage;
        return this;
    }
    public withWriteTraffic(writeTraffic: number): ResultsTopnBody {
        this['write_traffic'] = writeTraffic;
        return this;
    }
    public set writeTraffic(writeTraffic: number | undefined) {
        this['write_traffic'] = writeTraffic;
    }
    public get writeTraffic() {
        return this['write_traffic'];
    }
    public withLogGroupId(logGroupId: string): ResultsTopnBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): ResultsTopnBody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamId(logStreamId: string): ResultsTopnBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): ResultsTopnBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
}