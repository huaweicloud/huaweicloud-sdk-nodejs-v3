

export class SetHostPrivilegeRequestV3 {
    private 'user_name'?: string;
    public hosts?: Array<string>;
    public constructor(userName?: string, hosts?: Array<string>) { 
        this['user_name'] = userName;
        this['hosts'] = hosts;
    }
    public withUserName(userName: string): SetHostPrivilegeRequestV3 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withHosts(hosts: Array<string>): SetHostPrivilegeRequestV3 {
        this['hosts'] = hosts;
        return this;
    }
}