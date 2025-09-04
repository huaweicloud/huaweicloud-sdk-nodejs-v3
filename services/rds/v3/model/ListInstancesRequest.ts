

export class ListInstancesRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListInstancesRequestXLanguageEnum | string;
    public id?: string;
    public name?: string;
    public type?: ListInstancesRequestTypeEnum | string;
    private 'datastore_type'?: ListInstancesRequestDatastoreTypeEnum | string;
    private 'eps_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: string;
    private 'group_type'?: string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListInstancesRequestXLanguageEnum | string): ListInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: ListInstancesRequestTypeEnum | string): ListInstancesRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: ListInstancesRequestDatastoreTypeEnum | string): ListInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListInstancesRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListInstancesRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withEpsId(epsId: string): ListInstancesRequest {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withVpcId(vpcId: string): ListInstancesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstancesRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTags(tags: string): ListInstancesRequest {
        this['tags'] = tags;
        return this;
    }
    public withGroupType(groupType: string): ListInstancesRequest {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestTypeEnum {
    SINGLE = 'Single',
    HA = 'Ha',
    REPLICA = 'Replica'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer',
    MARIADB = 'MariaDB'
}
