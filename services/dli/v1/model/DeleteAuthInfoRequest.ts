

export class DeleteAuthInfoRequest {
    private 'auth_info_name'?: string;
    public constructor(authInfoName?: string) { 
        this['auth_info_name'] = authInfoName;
    }
    public withAuthInfoName(authInfoName: string): DeleteAuthInfoRequest {
        this['auth_info_name'] = authInfoName;
        return this;
    }
    public set authInfoName(authInfoName: string  | undefined) {
        this['auth_info_name'] = authInfoName;
    }
    public get authInfoName(): string | undefined {
        return this['auth_info_name'];
    }
}