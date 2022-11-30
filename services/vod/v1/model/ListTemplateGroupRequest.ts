

export class ListTemplateGroupRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'group_id'?: string | undefined;
    public status?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListTemplateGroupRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTemplateGroupRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withGroupId(groupId: string): ListTemplateGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStatus(status: string): ListTemplateGroupRequest {
        this['status'] = status;
        return this;
    }
    public withPage(page: number): ListTemplateGroupRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListTemplateGroupRequest {
        this['size'] = size;
        return this;
    }
}