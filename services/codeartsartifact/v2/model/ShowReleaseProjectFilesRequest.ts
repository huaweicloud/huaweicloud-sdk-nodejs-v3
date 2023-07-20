

export class ShowReleaseProjectFilesRequest {
    private 'file_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(fileName?: string) { 
        this['file_name'] = fileName;
    }
    public withFileName(fileName: string): ShowReleaseProjectFilesRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLimit(limit: number): ShowReleaseProjectFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowReleaseProjectFilesRequest {
        this['offset'] = offset;
        return this;
    }
}