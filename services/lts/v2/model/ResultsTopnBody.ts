

export class ResultsTopnBody {
    private 'index_traffic'?: number;
    public storage?: number;
    private 'write_traffic'?: number;
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_group_name_alias'?: string;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_stream_name_alias'?: string;
    private 'basic_transfer'?: number;
    private 'senior_transfer'?: number;
    private 'is_agency_transfer'?: boolean;
    private 'cold_storage'?: number;
    public constructor(indexTraffic?: number, storage?: number, writeTraffic?: number, logGroupId?: string, logGroupName?: string) { 
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
    public set indexTraffic(indexTraffic: number  | undefined) {
        this['index_traffic'] = indexTraffic;
    }
    public get indexTraffic(): number | undefined {
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
    public set writeTraffic(writeTraffic: number  | undefined) {
        this['write_traffic'] = writeTraffic;
    }
    public get writeTraffic(): number | undefined {
        return this['write_traffic'];
    }
    public withLogGroupId(logGroupId: string): ResultsTopnBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): ResultsTopnBody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogGroupNameAlias(logGroupNameAlias: string): ResultsTopnBody {
        this['log_group_name_alias'] = logGroupNameAlias;
        return this;
    }
    public set logGroupNameAlias(logGroupNameAlias: string  | undefined) {
        this['log_group_name_alias'] = logGroupNameAlias;
    }
    public get logGroupNameAlias(): string | undefined {
        return this['log_group_name_alias'];
    }
    public withLogStreamId(logStreamId: string): ResultsTopnBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): ResultsTopnBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamNameAlias(logStreamNameAlias: string): ResultsTopnBody {
        this['log_stream_name_alias'] = logStreamNameAlias;
        return this;
    }
    public set logStreamNameAlias(logStreamNameAlias: string  | undefined) {
        this['log_stream_name_alias'] = logStreamNameAlias;
    }
    public get logStreamNameAlias(): string | undefined {
        return this['log_stream_name_alias'];
    }
    public withBasicTransfer(basicTransfer: number): ResultsTopnBody {
        this['basic_transfer'] = basicTransfer;
        return this;
    }
    public set basicTransfer(basicTransfer: number  | undefined) {
        this['basic_transfer'] = basicTransfer;
    }
    public get basicTransfer(): number | undefined {
        return this['basic_transfer'];
    }
    public withSeniorTransfer(seniorTransfer: number): ResultsTopnBody {
        this['senior_transfer'] = seniorTransfer;
        return this;
    }
    public set seniorTransfer(seniorTransfer: number  | undefined) {
        this['senior_transfer'] = seniorTransfer;
    }
    public get seniorTransfer(): number | undefined {
        return this['senior_transfer'];
    }
    public withIsAgencyTransfer(isAgencyTransfer: boolean): ResultsTopnBody {
        this['is_agency_transfer'] = isAgencyTransfer;
        return this;
    }
    public set isAgencyTransfer(isAgencyTransfer: boolean  | undefined) {
        this['is_agency_transfer'] = isAgencyTransfer;
    }
    public get isAgencyTransfer(): boolean | undefined {
        return this['is_agency_transfer'];
    }
    public withColdStorage(coldStorage: number): ResultsTopnBody {
        this['cold_storage'] = coldStorage;
        return this;
    }
    public set coldStorage(coldStorage: number  | undefined) {
        this['cold_storage'] = coldStorage;
    }
    public get coldStorage(): number | undefined {
        return this['cold_storage'];
    }
}