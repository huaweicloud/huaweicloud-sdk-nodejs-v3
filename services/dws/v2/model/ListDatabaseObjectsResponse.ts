import { DatabaseObjectInfo } from './DatabaseObjectInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseObjectsResponse extends SdkResponse {
    public type?: string;
    private 'object_list'?: Array<DatabaseObjectInfo>;
    public count?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ListDatabaseObjectsResponse {
        this['type'] = type;
        return this;
    }
    public withObjectList(objectList: Array<DatabaseObjectInfo>): ListDatabaseObjectsResponse {
        this['object_list'] = objectList;
        return this;
    }
    public set objectList(objectList: Array<DatabaseObjectInfo>  | undefined) {
        this['object_list'] = objectList;
    }
    public get objectList(): Array<DatabaseObjectInfo> | undefined {
        return this['object_list'];
    }
    public withCount(count: string): ListDatabaseObjectsResponse {
        this['count'] = count;
        return this;
    }
}