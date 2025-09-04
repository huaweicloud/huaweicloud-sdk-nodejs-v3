import { NpuUsedInfoDTO } from './NpuUsedInfoDTO';


export class NPUDetailsDTO {
    private 'device_id'?: string;
    private 'npu_type'?: string;
    private 'product_name'?: string;
    private 'ai_core'?: number;
    public health?: string;
    private 'error_msg'?: string;
    private 'used_info'?: Array<NpuUsedInfoDTO>;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): NPUDetailsDTO {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withNpuType(npuType: string): NPUDetailsDTO {
        this['npu_type'] = npuType;
        return this;
    }
    public set npuType(npuType: string  | undefined) {
        this['npu_type'] = npuType;
    }
    public get npuType(): string | undefined {
        return this['npu_type'];
    }
    public withProductName(productName: string): NPUDetailsDTO {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withAiCore(aiCore: number): NPUDetailsDTO {
        this['ai_core'] = aiCore;
        return this;
    }
    public set aiCore(aiCore: number  | undefined) {
        this['ai_core'] = aiCore;
    }
    public get aiCore(): number | undefined {
        return this['ai_core'];
    }
    public withHealth(health: string): NPUDetailsDTO {
        this['health'] = health;
        return this;
    }
    public withErrorMsg(errorMsg: string): NPUDetailsDTO {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withUsedInfo(usedInfo: Array<NpuUsedInfoDTO>): NPUDetailsDTO {
        this['used_info'] = usedInfo;
        return this;
    }
    public set usedInfo(usedInfo: Array<NpuUsedInfoDTO>  | undefined) {
        this['used_info'] = usedInfo;
    }
    public get usedInfo(): Array<NpuUsedInfoDTO> | undefined {
        return this['used_info'];
    }
}