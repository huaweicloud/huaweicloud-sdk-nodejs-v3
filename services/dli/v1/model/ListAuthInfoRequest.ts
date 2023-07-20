

export class ListAuthInfoRequest {
    private 'auth_info_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAuthInfoName(authInfoName: string): ListAuthInfoRequest {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
    public withOffset(offset: number): ListAuthInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAuthInfoRequest {
        this['limit'] = limit;
        return this;
    }
}