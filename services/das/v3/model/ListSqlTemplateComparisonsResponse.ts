import { SQLTplCmp } from './SQLTplCmp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlTemplateComparisonsResponse extends SdkResponse {
    private 'sql_tpl_cmp_dto_list'?: Array<SQLTplCmp>;
    public constructor() { 
        super();
    }
    public withSqlTplCmpDtoList(sqlTplCmpDtoList: Array<SQLTplCmp>): ListSqlTemplateComparisonsResponse {
        this['sql_tpl_cmp_dto_list'] = sqlTplCmpDtoList;
        return this;
    }
    public set sqlTplCmpDtoList(sqlTplCmpDtoList: Array<SQLTplCmp>  | undefined) {
        this['sql_tpl_cmp_dto_list'] = sqlTplCmpDtoList;
    }
    public get sqlTplCmpDtoList(): Array<SQLTplCmp> | undefined {
        return this['sql_tpl_cmp_dto_list'];
    }
}