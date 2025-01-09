

export class ListDesktopsEipsRequest {
    private 'enterprise_project_id'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'user_name'?: string;
    public address?: string;
    public offset?: number;
    public limit?: number;
    public state?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDesktopsEipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDesktopId(desktopId: string): ListDesktopsEipsRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ListDesktopsEipsRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUserName(userName: string): ListDesktopsEipsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAddress(address: string): ListDesktopsEipsRequest {
        this['address'] = address;
        return this;
    }
    public withOffset(offset: number): ListDesktopsEipsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopsEipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withState(state: string): ListDesktopsEipsRequest {
        this['state'] = state;
        return this;
    }
}