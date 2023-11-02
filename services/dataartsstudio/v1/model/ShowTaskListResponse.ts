import { MetadataCollectionTask } from './MetadataCollectionTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskListResponse extends SdkResponse {
    public count?: number;
    private 'total_records'?: number;
    private 'max_records'?: number;
    public resources?: Array<MetadataCollectionTask>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowTaskListResponse {
        this['count'] = count;
        return this;
    }
    public withTotalRecords(totalRecords: number): ShowTaskListResponse {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withMaxRecords(maxRecords: number): ShowTaskListResponse {
        this['max_records'] = maxRecords;
        return this;
    }
    public set maxRecords(maxRecords: number  | undefined) {
        this['max_records'] = maxRecords;
    }
    public get maxRecords(): number | undefined {
        return this['max_records'];
    }
    public withResources(resources: Array<MetadataCollectionTask>): ShowTaskListResponse {
        this['resources'] = resources;
        return this;
    }
}