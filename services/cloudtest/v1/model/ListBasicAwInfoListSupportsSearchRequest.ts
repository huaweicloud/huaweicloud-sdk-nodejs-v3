import { SearchRequest } from './SearchRequest';


export class ListBasicAwInfoListSupportsSearchRequest {
    private 'project_id'?: string;
    private 'page_no'?: string;
    private 'page_size'?: string;
    private 'parent_id'?: string;
    public body?: SearchRequest;
    public constructor(projectId?: string, pageNo?: string, pageSize?: string) { 
        this['project_id'] = projectId;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ListBasicAwInfoListSupportsSearchRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageNo(pageNo: string): ListBasicAwInfoListSupportsSearchRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: string): ListBasicAwInfoListSupportsSearchRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withParentId(parentId: string): ListBasicAwInfoListSupportsSearchRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withBody(body: SearchRequest): ListBasicAwInfoListSupportsSearchRequest {
        this['body'] = body;
        return this;
    }
}