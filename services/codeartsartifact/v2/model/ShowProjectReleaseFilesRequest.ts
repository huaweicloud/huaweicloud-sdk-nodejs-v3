

export class ShowProjectReleaseFilesRequest {
    private 'file_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(fileName?: string) { 
        this['file_name'] = fileName;
    }
    public withFileName(fileName: string): ShowProjectReleaseFilesRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLimit(limit: number): ShowProjectReleaseFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowProjectReleaseFilesRequest {
        this['offset'] = offset;
        return this;
    }
}