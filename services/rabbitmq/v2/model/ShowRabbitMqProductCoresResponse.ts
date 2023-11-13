
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRabbitMqProductCoresResponse extends SdkResponse {
    private 'core_num'?: number;
    public constructor() { 
        super();
    }
    public withCoreNum(coreNum: number): ShowRabbitMqProductCoresResponse {
        this['core_num'] = coreNum;
        return this;
    }
    public set coreNum(coreNum: number  | undefined) {
        this['core_num'] = coreNum;
    }
    public get coreNum(): number | undefined {
        return this['core_num'];
    }
}