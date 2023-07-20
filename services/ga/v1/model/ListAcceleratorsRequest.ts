

export class ListAcceleratorsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public name?: string;
    public status?: ListAcceleratorsRequestStatusEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAcceleratorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAcceleratorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListAcceleratorsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListAcceleratorsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAcceleratorsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListAcceleratorsRequestStatusEnum | string): ListAcceleratorsRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAcceleratorsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAcceleratorsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
