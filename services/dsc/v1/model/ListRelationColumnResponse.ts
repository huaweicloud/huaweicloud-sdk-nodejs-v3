import { RelationSimpleInfo } from './RelationSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationColumnResponse extends SdkResponse {
    public total?: number;
    private 'column_list'?: Array<RelationSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRelationColumnResponse {
        this['total'] = total;
        return this;
    }
    public withColumnList(columnList: Array<RelationSimpleInfo>): ListRelationColumnResponse {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: Array<RelationSimpleInfo>  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): Array<RelationSimpleInfo> | undefined {
        return this['column_list'];
    }
}