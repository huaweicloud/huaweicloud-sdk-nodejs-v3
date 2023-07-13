import { DatabaseObject } from './DatabaseObject';
import { TargetRootDb } from './TargetRootDb';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDbObjectCollectionStatusResponse extends SdkResponse {
    private 'target_root_db'?: TargetRootDb | undefined;
    private 'object_info'?: { [key: string]: DatabaseObject; } | undefined;
    private 'max_table_num'?: number | undefined;
    public status?: ShowDbObjectCollectionStatusResponseStatusEnum;
    public id?: string;
    private 'object_scope'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTargetRootDb(targetRootDb: TargetRootDb): ShowDbObjectCollectionStatusResponse {
        this['target_root_db'] = targetRootDb;
        return this;
    }
    public set targetRootDb(targetRootDb: TargetRootDb | undefined) {
        this['target_root_db'] = targetRootDb;
    }
    public get targetRootDb() {
        return this['target_root_db'];
    }
    public withObjectInfo(objectInfo: { [key: string]: DatabaseObject; }): ShowDbObjectCollectionStatusResponse {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: { [key: string]: DatabaseObject; } | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo() {
        return this['object_info'];
    }
    public withMaxTableNum(maxTableNum: number): ShowDbObjectCollectionStatusResponse {
        this['max_table_num'] = maxTableNum;
        return this;
    }
    public set maxTableNum(maxTableNum: number | undefined) {
        this['max_table_num'] = maxTableNum;
    }
    public get maxTableNum() {
        return this['max_table_num'];
    }
    public withStatus(status: ShowDbObjectCollectionStatusResponseStatusEnum): ShowDbObjectCollectionStatusResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ShowDbObjectCollectionStatusResponse {
        this['id'] = id;
        return this;
    }
    public withObjectScope(objectScope: string): ShowDbObjectCollectionStatusResponse {
        this['object_scope'] = objectScope;
        return this;
    }
    public set objectScope(objectScope: string | undefined) {
        this['object_scope'] = objectScope;
    }
    public get objectScope() {
        return this['object_scope'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectCollectionStatusResponseStatusEnum {
    SUCCESS = 'success',
    FAILED = ' failed',
    PENDING = ' pending'
}
