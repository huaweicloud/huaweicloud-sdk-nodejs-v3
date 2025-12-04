
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaProductCoresResponse extends SdkResponse {
    private 'core_num'?: number;
    private 'total_extend_storage_space'?: number;
    public constructor() { 
        super();
    }
    public withCoreNum(coreNum: number): ShowKafkaProductCoresResponse {
        this['core_num'] = coreNum;
        return this;
    }
    public set coreNum(coreNum: number  | undefined) {
        this['core_num'] = coreNum;
    }
    public get coreNum(): number | undefined {
        return this['core_num'];
    }
    public withTotalExtendStorageSpace(totalExtendStorageSpace: number): ShowKafkaProductCoresResponse {
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