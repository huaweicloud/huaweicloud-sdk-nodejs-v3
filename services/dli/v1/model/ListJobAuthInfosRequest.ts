

export class ListJobAuthInfosRequest {
    private 'auth_info_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAuthInfoName(authInfoName: string): ListJobAuthInfosRequest {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
    public withOffset(offset: number): ListJobAuthInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobAuthInfosRequest {
        this['limit'] = limit;
        return this;
    }
}