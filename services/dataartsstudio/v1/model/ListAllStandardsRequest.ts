

export class ListAllStandardsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'directory_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'need_path'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListAllStandardsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListAllStandardsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListAllStandardsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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
    public withNeedPath(needPath: boolean): ListAllStandardsRequest {
        this['need_path'] = needPath;
        return this;
    }
    public set needPath(needPath: boolean  | undefined) {
        this['need_path'] = needPath;
    }
    public get needPath(): boolean | undefined {
        return this['need_path'];
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