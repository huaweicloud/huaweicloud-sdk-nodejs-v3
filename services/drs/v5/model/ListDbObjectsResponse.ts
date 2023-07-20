import { DatabaseObject } from './DatabaseObject';
import { TargetRootDb } from './TargetRootDb';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbObjectsResponse extends SdkResponse {
    private 'target_root_db'?: TargetRootDb;
    private 'object_info'?: { [key: string]: DatabaseObject; };
    private 'max_table_num'?: number;
    public status?: ListDbObjectsResponseStatusEnum | string;
    public id?: string;
    private 'object_scope'?: string;
    public constructor() { 
        super();
    }
    public withTargetRootDb(targetRootDb: TargetRootDb): ListDbObjectsResponse {
        this['target_root_db'] = targetRootDb;
        return this;
    }
    public set targetRootDb(targetRootDb: TargetRootDb  | undefined) {
        this['target_root_db'] = targetRootDb;
    }
    public get targetRootDb(): TargetRootDb | undefined {
        return this['target_root_db'];
    }
    public withObjectInfo(objectInfo: { [key: string]: DatabaseObject; }): ListDbObjectsResponse {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: { [key: string]: DatabaseObject; }  | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo(): { [key: string]: DatabaseObject; } | undefined {
        return this['object_info'];
    }
    public withMaxTableNum(maxTableNum: number): ListDbObjectsResponse {
        this['max_table_num'] = maxTableNum;
        return this;
    }
    public set maxTableNum(maxTableNum: number  | undefined) {
        this['max_table_num'] = maxTableNum;
    }
    public get maxTableNum(): number | undefined {
        return this['max_table_num'];
    }
    public withStatus(status: ListDbObjectsResponseStatusEnum | string): ListDbObjectsResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ListDbObjectsResponse {
        this['id'] = id;
        return this;
    }
    public withObjectScope(objectScope: string): ListDbObjectsResponse {
        this['object_scope'] = objectScope;
        return this;
    }
    public set objectScope(objectScope: string  | undefined) {
        this['object_scope'] = objectScope;
    }
    public get objectScope(): string | undefined {
        return this['object_scope'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDbObjectsResponseStatusEnum {
    SUCCESS = 'success',
    FAILED = ' failed',
    PENDING = ' pending'
}
