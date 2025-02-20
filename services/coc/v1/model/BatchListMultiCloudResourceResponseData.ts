

export class BatchListMultiCloudResourceResponseData {
    public id?: string;
    private 'resource_id'?: string;
    public name?: string;
    public vendor?: string;
    public type?: string;
    public datasource?: string;
    private 'region_id'?: string;
    public properties?: { [key: string]: object; };
    private 'create_time'?: string;
    public constructor() { 
    }
    public withId(id: string): BatchListMultiCloudResourceResponseData {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): BatchListMultiCloudResourceResponseData {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withName(name: string): BatchListMultiCloudResourceResponseData {
        this['name'] = name;
        return this;
    }
    public withVendor(vendor: string): BatchListMultiCloudResourceResponseData {
        this['vendor'] = vendor;
        return this;
    }
    public withType(type: string): BatchListMultiCloudResourceResponseData {
        this['type'] = type;
        return this;
    }
    public withDatasource(datasource: string): BatchListMultiCloudResourceResponseData {
        this['datasource'] = datasource;
        return this;
    }
    public withRegionId(regionId: string): BatchListMultiCloudResourceResponseData {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProperties(properties: { [key: string]: object; }): BatchListMultiCloudResourceResponseData {
        this['properties'] = properties;
        return this;
    }
    public withCreateTime(createTime: string): BatchListMultiCloudResourceResponseData {
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