

export class ListProductTwoTemplatesRequest {
    private 'project_uuid'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withProjectUuid(projectUuid: string): ListProductTwoTemplatesRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withPageNo(pageNo: number): ListProductTwoTemplatesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListProductTwoTemplatesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}