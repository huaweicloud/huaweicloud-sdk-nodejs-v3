import { ApiVersionObj } from './ApiVersionObj';
import { Volume } from './Volume';
import { VolumeKindObj } from './VolumeKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumesResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: VolumeKindObj;
    public items?: Array<Volume>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListVolumesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: VolumeKindObj): ListVolumesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<Volume>): ListVolumesResponse {
        this['items'] = items;
        return this;
    }
}