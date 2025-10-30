
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventOperatesResponse extends SdkResponse {
    private 'operate_accept_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withOperateAcceptList(operateAcceptList: Array<string>): ListEventOperatesResponse {
        this['operate_accept_list'] = operateAcceptList;
        return this;
    }
    public set operateAcceptList(operateAcceptList: Array<string>  | undefined) {
        this['operate_accept_list'] = operateAcceptList;
    }
    public get operateAcceptList(): Array<string> | undefined {
        return this['operate_accept_list'];
    }
}