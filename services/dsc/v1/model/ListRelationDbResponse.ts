import { RelationSimpleInfo } from './RelationSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationDbResponse extends SdkResponse {
    public total?: number;
    private 'db_list'?: Array<RelationSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRelationDbResponse {
        this['total'] = total;
        return this;
    }
    public withDbList(dbList: Array<RelationSimpleInfo>): ListRelationDbResponse {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<RelationSimpleInfo>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<RelationSimpleInfo> | undefined {
        return this['db_list'];
    }
}