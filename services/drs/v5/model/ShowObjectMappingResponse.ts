import { DbObjectInfo } from './DbObjectInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowObjectMappingResponse extends SdkResponse {
    public count?: number;
    private 'object_mapping_list'?: Array<DbObjectInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowObjectMappingResponse {
        this['count'] = count;
        return this;
    }
    public withObjectMappingList(objectMappingList: Array<DbObjectInfo>): ShowObjectMappingResponse {
        this['object_mapping_list'] = objectMappingList;
        return this;
    }
    public set objectMappingList(objectMappingList: Array<DbObjectInfo>  | undefined) {
        this['object_mapping_list'] = objectMappingList;
    }
    public get objectMappingList(): Array<DbObjectInfo> | undefined {
        return this['object_mapping_list'];
    }
}