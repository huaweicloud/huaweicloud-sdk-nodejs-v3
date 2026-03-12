import { ResourceDetail } from './ResourceDetail';


export class RegionResourceDetail {
    private 'region_id'?: string;
    private 'is_error'?: boolean;
    public resources?: Array<ResourceDetail>;
    public constructor(regionId?: string, isError?: boolean, resources?: Array<ResourceDetail>) { 
        this['region_id'] = regionId;
        this['is_error'] = isError;
        this['resources'] = resources;
    }
    public withRegionId(regionId: string): RegionResourceDetail {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withIsError(isError: boolean): RegionResourceDetail {
        this['is_error'] = isError;
        return this;
    }
    public set isError(isError: boolean  | undefined) {
        this['is_error'] = isError;
    }
    public get isError(): boolean | undefined {
        return this['is_error'];
    }
    public withResources(resources: Array<ResourceDetail>): RegionResourceDetail {
        this['resources'] = resources;
        return this;
    }
}