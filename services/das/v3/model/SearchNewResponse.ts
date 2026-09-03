import { SqlItemDto } from './SqlItemDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchNewResponse extends SdkResponse {
    private 'sql_item_dto_list'?: Array<SqlItemDto>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSqlItemDtoList(sqlItemDtoList: Array<SqlItemDto>): SearchNewResponse {
        this['sql_item_dto_list'] = sqlItemDtoList;
        return this;
    }
    public set sqlItemDtoList(sqlItemDtoList: Array<SqlItemDto>  | undefined) {
        this['sql_item_dto_list'] = sqlItemDtoList;
    }
    public get sqlItemDtoList(): Array<SqlItemDto> | undefined {
        return this['sql_item_dto_list'];
    }
    public withTotal(total: number): SearchNewResponse {
        this['total'] = total;
        return this;
    }
}