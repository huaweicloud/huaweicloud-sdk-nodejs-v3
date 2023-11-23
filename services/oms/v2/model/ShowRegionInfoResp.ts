import { RegionInfo } from './RegionInfo';


export class ShowRegionInfoResp {
    private 'service_name'?: string;
    private 'region_list'?: Array<RegionInfo>;
    public constructor() { 
    }
    public withServiceName(serviceName: string): ShowRegionInfoResp {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withRegionList(regionList: Array<RegionInfo>): ShowRegionInfoResp {
        this['region_list'] = regionList;
        return this;
    }
    public set regionList(regionList: Array<RegionInfo>  | undefined) {
        this['region_list'] = regionList;
    }
    public get regionList(): Array<RegionInfo> | undefined {
        return this['region_list'];
    }
}