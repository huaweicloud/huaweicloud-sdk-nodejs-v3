import { RelationSimpleInfo } from './RelationSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationTableResponse extends SdkResponse {
    public total?: number;
    private 'current_page'?: number;
    private 'table_list'?: Array<RelationSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRelationTableResponse {
        this['total'] = total;
        return this;
    }
    public withCurrentPage(currentPage: number): ListRelationTableResponse {
        this['current_page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current_page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current_page'];
    }
    public withTableList(tableList: Array<RelationSimpleInfo>): ListRelationTableResponse {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<RelationSimpleInfo>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<RelationSimpleInfo> | undefined {
        return this['table_list'];
    }
}