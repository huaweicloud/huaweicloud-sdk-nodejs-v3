

export class ListMergeRequestTemplatesRequest {
    private 'repository_id'?: number;
    public view?: ListMergeRequestTemplatesRequestViewEnum | string;
    private 'template_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, view?: string) { 
        this['repository_id'] = repositoryId;
        this['view'] = view;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestTemplatesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withView(view: ListMergeRequestTemplatesRequestViewEnum | string): ListMergeRequestTemplatesRequest {
        this['view'] = view;
        return this;
    }
    public withTemplateName(templateName: string): ListMergeRequestTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withOffset(offset: number): ListMergeRequestTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeRequestTemplatesRequestViewEnum {
    DEFAULT = 'default',
    LIST = 'list'
}
