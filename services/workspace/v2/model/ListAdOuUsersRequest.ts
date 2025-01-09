

export class ListAdOuUsersRequest {
    private 'ou_dn'?: string;
    private 'user_name'?: string;
    private 'has_existed'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(ouDn?: string) { 
        this['ou_dn'] = ouDn;
    }
    public withOuDn(ouDn: string): ListAdOuUsersRequest {
        this['ou_dn'] = ouDn;
        return this;
    }
    public set ouDn(ouDn: string  | undefined) {
        this['ou_dn'] = ouDn;
    }
    public get ouDn(): string | undefined {
        return this['ou_dn'];
    }
    public withUserName(userName: string): ListAdOuUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withHasExisted(hasExisted: boolean): ListAdOuUsersRequest {
        this['has_existed'] = hasExisted;
        return this;
    }
    public set hasExisted(hasExisted: boolean  | undefined) {
        this['has_existed'] = hasExisted;
    }
    public get hasExisted(): boolean | undefined {
        return this['has_existed'];
    }
    public withLimit(limit: number): ListAdOuUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAdOuUsersRequest {
        this['offset'] = offset;
        return this;
    }
}