

export class CountInternetBandwidthRequest {
    public id?: Array<string>;
    public size?: Array<number>;
    public name?: Array<string>;
    private 'name_like'?: string;
    private 'access_site'?: Array<string>;
    public status?: Array<CountInternetBandwidthRequestStatusEnum> | Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withId(id: Array<string>): CountInternetBandwidthRequest {
        this['id'] = id;
        return this;
    }
    public withSize(size: Array<number>): CountInternetBandwidthRequest {
        this['size'] = size;
        return this;
    }
    public withName(name: Array<string>): CountInternetBandwidthRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): CountInternetBandwidthRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withAccessSite(accessSite: Array<string>): CountInternetBandwidthRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: Array<string>  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): Array<string> | undefined {
        return this['access_site'];
    }
    public withStatus(status: Array<CountInternetBandwidthRequestStatusEnum> | Array<string>): CountInternetBandwidthRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): CountInternetBandwidthRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): CountInternetBandwidthRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountInternetBandwidthRequestStatusEnum {
    FREEZED = 'freezed',
    NORMAL = 'normal'
}
