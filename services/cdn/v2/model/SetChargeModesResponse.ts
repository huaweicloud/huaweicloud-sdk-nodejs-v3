
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetChargeModesResponse extends SdkResponse {
    private 'charge_mode'?: string | undefined;
    private 'product_type'?: string | undefined;
    private 'effective_time'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'service_area'?: string | undefined;
    public status?: string;
    public constructor() { 
        super();
    }
    public withChargeMode(chargeMode: string): SetChargeModesResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withProductType(productType: string): SetChargeModesResponse {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withEffectiveTime(effectiveTime: number): SetChargeModesResponse {
        this['effective_time'] = effectiveTime;
        return this;
    }
    public set effectiveTime(effectiveTime: number | undefined) {
        this['effective_time'] = effectiveTime;
    }
    public get effectiveTime() {
        return this['effective_time'];
    }
    public withCreateTime(createTime: number): SetChargeModesResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withServiceArea(serviceArea: string): SetChargeModesResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withStatus(status: string): SetChargeModesResponse {
        this['status'] = status;
        return this;
    }
}