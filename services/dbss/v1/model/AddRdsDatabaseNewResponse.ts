import { RdsDbResponseRetList } from './RdsDbResponseRetList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRdsDatabaseNewResponse extends SdkResponse {
    private 'ret_list'?: Array<RdsDbResponseRetList>;
    public constructor() { 
        super();
    }
    public withRetList(retList: Array<RdsDbResponseRetList>): AddRdsDatabaseNewResponse {
        this['ret_list'] = retList;
        return this;
    }
    public set retList(retList: Array<RdsDbResponseRetList>  | undefined) {
        this['ret_list'] = retList;
    }
    public get retList(): Array<RdsDbResponseRetList> | undefined {
        return this['ret_list'];
    }
}