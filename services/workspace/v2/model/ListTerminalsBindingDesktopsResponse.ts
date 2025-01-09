import { TerminalsBindingDesktopsInfo } from './TerminalsBindingDesktopsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTerminalsBindingDesktopsResponse extends SdkResponse {
    private 'bind_list'?: Array<TerminalsBindingDesktopsInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withBindList(bindList: Array<TerminalsBindingDesktopsInfo>): ListTerminalsBindingDesktopsResponse {
        this['bind_list'] = bindList;
        return this;
    }
    public set bindList(bindList: Array<TerminalsBindingDesktopsInfo>  | undefined) {
        this['bind_list'] = bindList;
    }
    public get bindList(): Array<TerminalsBindingDesktopsInfo> | undefined {
        return this['bind_list'];
    }
    public withTotalNum(totalNum: number): ListTerminalsBindingDesktopsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}