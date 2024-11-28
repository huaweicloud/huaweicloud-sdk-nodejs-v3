

export class ListTenantGeipSupportInstancesRequest {
    private 'access_site'?: string;
    public fields?: Array<ListTenantGeipSupportInstancesRequestFieldsEnum> | Array<string>;
    public constructor(accessSite?: string) { 
        this['access_site'] = accessSite;
    }
    public withAccessSite(accessSite: string): ListTenantGeipSupportInstancesRequest {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withFields(fields: Array<ListTenantGeipSupportInstancesRequestFieldsEnum> | Array<string>): ListTenantGeipSupportInstancesRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTenantGeipSupportInstancesRequestFieldsEnum {
    ID = 'id',
    INSTANCE_TYPE = 'instance_type',
    REGION_ID = 'region_id',
    PUBLIC_BORDER_GROUP = 'public_border_group',
    STATUS = 'status',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
