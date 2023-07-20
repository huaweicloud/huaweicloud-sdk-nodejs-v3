

export class ListDeployTaskHistoryByDateRequest {
    private 'project_id'?: string;
    public id?: string;
    public page?: number;
    public size?: number;
    private 'start_date'?: string;
    private 'end_date'?: string;
    private 'Content-Type'?: ListDeployTaskHistoryByDateRequestContentTypeEnum | string;
    public constructor(projectId?: string, id?: string, page?: number, size?: number, startDate?: string, endDate?: string, contentType?: string) { 
        this['project_id'] = projectId;
        this['id'] = id;
        this['page'] = page;
        this['size'] = size;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['Content-Type'] = contentType;
    }
    public withProjectId(projectId: string): ListDeployTaskHistoryByDateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): ListDeployTaskHistoryByDateRequest {
        this['id'] = id;
        return this;
    }
    public withPage(page: number): ListDeployTaskHistoryByDateRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListDeployTaskHistoryByDateRequest {
        this['size'] = size;
        return this;
    }
    public withStartDate(startDate: string): ListDeployTaskHistoryByDateRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListDeployTaskHistoryByDateRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withContentType(contentType: ListDeployTaskHistoryByDateRequestContentTypeEnum | string): ListDeployTaskHistoryByDateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListDeployTaskHistoryByDateRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListDeployTaskHistoryByDateRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDeployTaskHistoryByDateRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
