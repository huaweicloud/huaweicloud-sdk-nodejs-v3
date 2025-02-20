

export class ListMultiCloudResourcesRequest {
    public vendor?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
    private 'resource_id_list'?: Array<string>;
    private 'name_list'?: Array<string>;
    private 'region_id_list'?: Array<string>;
    public constructor(vendor?: string, limit?: number) { 
        this['vendor'] = vendor;
        this['limit'] = limit;
    }
    public withVendor(vendor: string): ListMultiCloudResourcesRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withType(type: string): ListMultiCloudResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListMultiCloudResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListMultiCloudResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceIdList(resourceIdList: Array<string>): ListMultiCloudResourcesRequest {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
    public withNameList(nameList: Array<string>): ListMultiCloudResourcesRequest {
        this['name_list'] = nameList;
        return this;
    }
    public set nameList(nameList: Array<string>  | undefined) {
        this['name_list'] = nameList;
    }
    public get nameList(): Array<string> | undefined {
        return this['name_list'];
    }
    public withRegionIdList(regionIdList: Array<string>): ListMultiCloudResourcesRequest {
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