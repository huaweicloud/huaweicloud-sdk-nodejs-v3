import { CheckitemModel } from './CheckitemModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCheckitemsResponse extends SdkResponse {
    private 'builtin_checkitem_num'?: number;
    private 'checkitem_num'?: number;
    private 'customized_checkitem_num'?: number;
    public count?: number;
    public checkitems?: Array<CheckitemModel>;
    public constructor() { 
        super();
    }
    public withBuiltinCheckitemNum(builtinCheckitemNum: number): SearchCheckitemsResponse {
        this['builtin_checkitem_num'] = builtinCheckitemNum;
        return this;
    }
    public set builtinCheckitemNum(builtinCheckitemNum: number  | undefined) {
        this['builtin_checkitem_num'] = builtinCheckitemNum;
    }
    public get builtinCheckitemNum(): number | undefined {
        return this['builtin_checkitem_num'];
    }
    public withCheckitemNum(checkitemNum: number): SearchCheckitemsResponse {
        this['checkitem_num'] = checkitemNum;
        return this;
    }
    public set checkitemNum(checkitemNum: number  | undefined) {
        this['checkitem_num'] = checkitemNum;
    }
    public get checkitemNum(): number | undefined {
        return this['checkitem_num'];
    }
    public withCustomizedCheckitemNum(customizedCheckitemNum: number): SearchCheckitemsResponse {
        this['customized_checkitem_num'] = customizedCheckitemNum;
        return this;
    }
    public set customizedCheckitemNum(customizedCheckitemNum: number  | undefined) {
        this['customized_checkitem_num'] = customizedCheckitemNum;
    }
    public get customizedCheckitemNum(): number | undefined {
        return this['customized_checkitem_num'];
    }
    public withCount(count: number): SearchCheckitemsResponse {
        this['count'] = count;
        return this;
    }
    public withCheckitems(checkitems: Array<CheckitemModel>): SearchCheckitemsResponse {
        this['checkitems'] = checkitems;
        return this;
    }
}