
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketMqProductCoresResponse extends SdkResponse {
    private 'core_num'?: number;
    private 'total_extend_storage_space'?: number;
    public constructor() { 
        super();
    }
    public withCoreNum(coreNum: number): ShowRocketMqProductCoresResponse {
        this['core_num'] = coreNum;
        return this;
    }
    public set coreNum(coreNum: number  | undefined) {
        this['core_num'] = coreNum;
    }
    public get coreNum(): number | undefined {
        return this['core_num'];
    }
    public withTotalExtendStorageSpace(totalExtendStorageSpace: number): ShowRocketMqProductCoresResponse {
        this['total_extend_storage_space'] = totalExtendStorageSpace;
        return this;
    }
    public set totalExtendStorageSpace(totalExtendStorageSpace: number  | undefined) {
        this['total_extend_storage_space'] = totalExtendStorageSpace;
    }
    public get totalExtendStorageSpace(): number | undefined {
        return this['total_extend_storage_space'];
    }
}