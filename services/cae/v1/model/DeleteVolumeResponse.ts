import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { MountComponent } from './MountComponent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteVolumeResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public items?: Array<MountComponent>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): DeleteVolumeResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): DeleteVolumeResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<MountComponent>): DeleteVolumeResponse {
        this['items'] = items;
        return this;
    }
}