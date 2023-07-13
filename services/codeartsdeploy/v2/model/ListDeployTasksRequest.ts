

export class ListDeployTasksRequest {
    private 'project_id': string | undefined;
    private 'Content-Type': ListDeployTasksRequestContentTypeEnum | undefined;
    public page: number;
    public size: number;
    public constructor(projectId?: any, contentType?: any, page?: any, size?: any) { 
        this['project_id'] = projectId;
        this['Content-Type'] = contentType;
        this['page'] = page;
        this['size'] = size;
    }
    public withProjectId(projectId: string): ListDeployTasksRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withContentType(contentType: ListDeployTasksRequestContentTypeEnum): ListDeployTasksRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListDeployTasksRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withPage(page: number): ListDeployTasksRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListDeployTasksRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDeployTasksRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
