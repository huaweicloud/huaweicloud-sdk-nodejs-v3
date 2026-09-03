import { Tpl } from './Tpl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlTemplatesResponse extends SdkResponse {
    private 'tpl_list'?: Array<Tpl>;
    public constructor() { 
        super();
    }
    public withTplList(tplList: Array<Tpl>): ListSqlTemplatesResponse {
        this['tpl_list'] = tplList;
        return this;
    }
    public set tplList(tplList: Array<Tpl>  | undefined) {
        this['tpl_list'] = tplList;
    }
    public get tplList(): Array<Tpl> | undefined {
        return this['tpl_list'];
    }
}