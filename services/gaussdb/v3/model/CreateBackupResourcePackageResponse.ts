
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBackupResourcePackageResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'spec_code'?: string;
    public num?: number;
    private 'period_type'?: CreateBackupResourcePackageResponsePeriodTypeEnum | string;
    private 'period_num'?: number;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateBackupResourcePackageResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withSpecCode(specCode: string): CreateBackupResourcePackageResponse {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNum(num: number): CreateBackupResourcePackageResponse {
        this['num'] = num;
        return this;
    }
    public withPeriodType(periodType: CreateBackupResourcePackageResponsePeriodTypeEnum | string): CreateBackupResourcePackageResponse {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: CreateBackupResourcePackageResponsePeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): CreateBackupResourcePackageResponsePeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateBackupResourcePackageResponse {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateBackupResourcePackageResponsePeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
