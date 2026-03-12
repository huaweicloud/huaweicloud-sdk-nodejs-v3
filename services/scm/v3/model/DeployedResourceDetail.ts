import { RegionResourceDetail } from './RegionResourceDetail';


export class DeployedResourceDetail {
    public service?: string;
    private 'resource_num'?: number;
    private 'resource_location'?: string;
    private 'region_resources'?: Array<RegionResourceDetail>;
    public constructor(service?: string, resourceNum?: number, resourceLocation?: string, regionResources?: Array<RegionResourceDetail>) { 
        this['service'] = service;
        this['resource_num'] = resourceNum;
        this['resource_location'] = resourceLocation;
        this['region_resources'] = regionResources;
    }
    public withService(service: string): DeployedResourceDetail {
        this['service'] = service;
        return this;
    }
    public withResourceNum(resourceNum: number): DeployedResourceDetail {
        this['resource_num'] = resourceNum;
        return this;
    }
    public set resourceNum(resourceNum: number  | undefined) {
        this['resource_num'] = resourceNum;
    }
    public get resourceNum(): number | undefined {
        return this['resource_num'];
    }
    public withResourceLocation(resourceLocation: string): DeployedResourceDetail {
        this['resource_location'] = resourceLocation;
        return this;
    }
    public set resourceLocation(resourceLocation: string  | undefined) {
        this['resource_location'] = resourceLocation;
    }
    public get resourceLocation(): string | undefined {
        return this['resource_location'];
    }
    public withRegionResources(regionResources: Array<RegionResourceDetail>): DeployedResourceDetail {
        this['region_resources'] = regionResources;
        return this;
    }
    public set regionResources(regionResources: Array<RegionResourceDetail>  | undefined) {
        this['region_resources'] = regionResources;
    }
    public get regionResources(): Array<RegionResourceDetail> | undefined {
        return this['region_resources'];
    }
}