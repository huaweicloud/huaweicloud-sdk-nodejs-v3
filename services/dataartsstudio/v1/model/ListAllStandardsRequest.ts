

export class ListAllStandardsRequest {
    public workspace?: string;
    private 'directory_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListAllStandardsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDirectoryId(directoryId: string): ListAllStandardsRequest {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withBeginTime(beginTime: string): ListAllStandardsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListAllStandardsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListAllStandardsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAllStandardsRequest {
        this['offset'] = offset;
        return this;
    }
}