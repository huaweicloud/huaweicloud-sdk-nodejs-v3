

export class CountMultiCloudResourcesRequest {
    public vendor?: string;
    public type?: string;
    private 'resource_id_list'?: Array<string>;
    private 'name_list'?: Array<string>;
    private 'region_id_list'?: Array<string>;
    public constructor(vendor?: string) { 
        this['vendor'] = vendor;
    }
    public withVendor(vendor: string): CountMultiCloudResourcesRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withType(type: string): CountMultiCloudResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): CountMultiCloudResourcesRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withNameList(nameList: Array<string>): CountMultiCloudResourcesRequest {
        this['name_list'] = nameList;
        return this;
    }
    public set nameList(nameList: Array<string>  | undefined) {
        this['name_list'] = nameList;
    }
    public get nameList(): Array<string> | undefined {
        return this['name_list'];
    }
    public withRegionIdList(regionIdList: Array<string>): CountMultiCloudResourcesRequest {
        this['region_id_list'] = regionIdList;
        return this;
    }
    public set regionIdList(regionIdList: Array<string>  | undefined) {
        this['region_id_list'] = regionIdList;
    }
    public get regionIdList(): Array<string> | undefined {
        return this['region_id_list'];
    }
}