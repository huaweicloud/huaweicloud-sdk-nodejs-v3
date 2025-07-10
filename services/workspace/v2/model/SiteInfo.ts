

export class SiteInfo {
    private 'site_id'?: string;
    private 'site_name'?: string;
    private 'site_type'?: SiteInfoSiteTypeEnum | string;
    private 'project_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withSiteId(siteId: string): SiteInfo {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withSiteName(siteName: string): SiteInfo {
        this['site_name'] = siteName;
        return this;
    }
    public set siteName(siteName: string  | undefined) {
        this['site_name'] = siteName;
    }
    public get siteName(): string | undefined {
        return this['site_name'];
    }
    public withSiteType(siteType: SiteInfoSiteTypeEnum | string): SiteInfo {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: SiteInfoSiteTypeEnum | string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): SiteInfoSiteTypeEnum | string | undefined {
        return this['site_type'];
    }
    public withProjectId(projectId: string): SiteInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): SiteInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): SiteInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SiteInfoSiteTypeEnum {
    CENTER = 'CENTER',
    IES = 'IES'
}
