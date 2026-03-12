import { ProductInfo } from './ProductInfo';


export class CreateCertificateAuthorityOrderRequestBody {
    private 'cloud_service_type'?: string;
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'promotion_info'?: string;
    private 'subscription_num'?: number;
    private 'is_auto_pay'?: number;
    private 'enterprise_project_id'?: string;
    private 'product_infos'?: Array<ProductInfo>;
    public constructor(cloudServiceType?: string, chargingMode?: number, periodType?: number, periodNum?: number, isAutoRenew?: number, subscriptionNum?: number, productInfos?: Array<ProductInfo>) { 
        this['cloud_service_type'] = cloudServiceType;
        this['charging_mode'] = chargingMode;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['is_auto_renew'] = isAutoRenew;
        this['subscription_num'] = subscriptionNum;
        this['product_infos'] = productInfos;
    }
    public withCloudServiceType(cloudServiceType: string): CreateCertificateAuthorityOrderRequestBody {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withChargingMode(chargingMode: number): CreateCertificateAuthorityOrderRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): CreateCertificateAuthorityOrderRequestBody {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateCertificateAuthorityOrderRequestBody {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateCertificateAuthorityOrderRequestBody {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withPromotionInfo(promotionInfo: string): CreateCertificateAuthorityOrderRequestBody {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateCertificateAuthorityOrderRequestBody {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withIsAutoPay(isAutoPay: number): CreateCertificateAuthorityOrderRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCertificateAuthorityOrderRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProductInfos(productInfos: Array<ProductInfo>): CreateCertificateAuthorityOrderRequestBody {
        this['product_infos'] = productInfos;
        return this;
    }
    public set productInfos(productInfos: Array<ProductInfo>  | undefined) {
        this['product_infos'] = productInfos;
    }
    public get productInfos(): Array<ProductInfo> | undefined {
        return this['product_infos'];
    }
}