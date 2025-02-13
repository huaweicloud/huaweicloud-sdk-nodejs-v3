import { ApiVersionObj } from './ApiVersionObj';
import { ComponentSnapshotItem } from './ComponentSnapshotItem';
import { ComponentSnapshotKindObj } from './ComponentSnapshotKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentSnapshotsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentSnapshotKindObj;
    public items?: Array<ComponentSnapshotItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListComponentSnapshotsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentSnapshotKindObj): ListComponentSnapshotsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<ComponentSnapshotItem>): ListComponentSnapshotsResponse {
        this['items'] = items;
        return this;
    }
}