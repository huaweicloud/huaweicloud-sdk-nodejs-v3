

export class SearchByChecksumRequest {
    public checksum?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public format?: string;
    private 'in_project'?: string;
    public constructor(checksum?: string) { 
        this['checksum'] = checksum;
    }
    public withChecksum(checksum: string): SearchByChecksumRequest {
        this['checksum'] = checksum;
        return this;
    }
    public withPageNo(pageNo: number): SearchByChecksumRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): SearchByChecksumRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withFormat(format: string): SearchByChecksumRequest {
        this['format'] = format;
        return this;
    }
    public withInProject(inProject: string): SearchByChecksumRequest {
        this['in_project'] = inProject;
        return this;
    }
    public set inProject(inProject: string  | undefined) {
        this['in_project'] = inProject;
    }
    public get inProject(): string | undefined {
        return this['in_project'];
    }
}