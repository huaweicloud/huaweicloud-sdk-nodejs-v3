

export class ListDesktopsRequest {
    private 'user_name'?: Array<string>;
    private 'computer_name'?: string;
    private 'desktop_ip'?: string;
    public offset?: number;
    public limit?: number;
    private 'pool_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'desktop_type'?: string;
    private 'is_share_desktop'?: boolean;
    private 'subnet_id'?: string;
    public status?: string;
    private 'desktop_id'?: Array<string>;
    public tag?: string;
    public constructor() { 
    }
    public withUserName(userName: Array<string>): ListDesktopsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: Array<string>  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): Array<string> | undefined {
        return this['user_name'];
    }
    public withComputerName(computerName: string): ListDesktopsRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withDesktopIp(desktopIp: string): ListDesktopsRequest {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withOffset(offset: number): ListDesktopsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPoolId(poolId: string): ListDesktopsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDesktopsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDesktopType(desktopType: string): ListDesktopsRequest {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withIsShareDesktop(isShareDesktop: boolean): ListDesktopsRequest {
        this['is_share_desktop'] = isShareDesktop;
        return this;
    }
    public set isShareDesktop(isShareDesktop: boolean  | undefined) {
        this['is_share_desktop'] = isShareDesktop;
    }
    public get isShareDesktop(): boolean | undefined {
        return this['is_share_desktop'];
    }
    public withSubnetId(subnetId: string): ListDesktopsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withStatus(status: string): ListDesktopsRequest {
        this['status'] = status;
        return this;
    }
    public withDesktopId(desktopId: Array<string>): ListDesktopsRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: Array<string>  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): Array<string> | undefined {
        return this['desktop_id'];
    }
    public withTag(tag: string): ListDesktopsRequest {
        this['tag'] = tag;
        return this;
    }
}