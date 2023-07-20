import { DedicatedComputeInfo } from './DedicatedComputeInfo';
import { DedicatedStorageInfo } from './DedicatedStorageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDedicatedResourceInfoResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'availability_zone_ids'?: Array<string>;
    public architecture?: string;
    public status?: string;
    private 'dedicated_compute_info'?: DedicatedComputeInfo;
    private 'dedicated_storage_info'?: DedicatedStorageInfo;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDedicatedResourceInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDedicatedResourceInfoResponse {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): ShowDedicatedResourceInfoResponse {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): ShowDedicatedResourceInfoResponse {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withArchitecture(architecture: string): ShowDedicatedResourceInfoResponse {
        this['architecture'] = architecture;
        return this;
    }
    public withStatus(status: string): ShowDedicatedResourceInfoResponse {
        this['status'] = status;
        return this;
    }
    public withDedicatedComputeInfo(dedicatedComputeInfo: DedicatedComputeInfo): ShowDedicatedResourceInfoResponse {
        this['dedicated_compute_info'] = dedicatedComputeInfo;
        return this;
    }
    public set dedicatedComputeInfo(dedicatedComputeInfo: DedicatedComputeInfo  | undefined) {
        this['dedicated_compute_info'] = dedicatedComputeInfo;
    }
    public get dedicatedComputeInfo(): DedicatedComputeInfo | undefined {
        return this['dedicated_compute_info'];
    }
    public withDedicatedStorageInfo(dedicatedStorageInfo: DedicatedStorageInfo): ShowDedicatedResourceInfoResponse {
        this['dedicated_storage_info'] = dedicatedStorageInfo;
        return this;
    }
    public set dedicatedStorageInfo(dedicatedStorageInfo: DedicatedStorageInfo  | undefined) {
        this['dedicated_storage_info'] = dedicatedStorageInfo;
    }
    public get dedicatedStorageInfo(): DedicatedStorageInfo | undefined {
        return this['dedicated_storage_info'];
    }
}