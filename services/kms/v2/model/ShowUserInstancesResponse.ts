
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserInstancesResponse extends SdkResponse {
    private 'instance_num'?: number | undefined;
    public constructor() { 
        super();
    }
    public withInstanceNum(instanceNum: number): ShowUserInstancesResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum() {
        return this['instance_num'];
    }
}