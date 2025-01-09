import { OrderExtendParam } from './OrderExtendParam';


export class CreateChangeOrderReq {
    public type?: string;
    private 'is_subscribe'?: boolean;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'resize_product_id'?: string;
    private 'flavor_id'?: string;
    private 'expand_volume_id'?: string;
    private 'expand_new_size'?: number;
    private 'new_quantity'?: number;
    private 'exclusive_lites_product_id'?: string;
    private 'cloud_service_console_url'?: string;
    private 'enterprise_project_id'?: string;
    private 'extend_param'?: OrderExtendParam;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): CreateChangeOrderReq {
        this['type'] = type;
        return this;
    }
    public withIsSubscribe(isSubscribe: boolean): CreateChangeOrderReq {
        this['is_subscribe'] = isSubscribe;
        return this;
    }
    public set isSubscribe(isSubscribe: boolean  | undefined) {
        this['is_subscribe'] = isSubscribe;
    }
    public get isSubscribe(): boolean | undefined {
        return this['is_subscribe'];
    }
    public withPeriodType(periodType: number): CreateChangeOrderReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateChangeOrderReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withResizeProductId(resizeProductId: string): CreateChangeOrderReq {
        this['resize_product_id'] = resizeProductId;
        return this;
    }
    public set resizeProductId(resizeProductId: string  | undefined) {
        this['resize_product_id'] = resizeProductId;
    }
    public get resizeProductId(): string | undefined {
        return this['resize_product_id'];
    }
    public withFlavorId(flavorId: string): CreateChangeOrderReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withExpandVolumeId(expandVolumeId: string): CreateChangeOrderReq {
        this['expand_volume_id'] = expandVolumeId;
        return this;
    }
    public set expandVolumeId(expandVolumeId: string  | undefined) {
        this['expand_volume_id'] = expandVolumeId;
    }
    public get expandVolumeId(): string | undefined {
        return this['expand_volume_id'];
    }
    public withExpandNewSize(expandNewSize: number): CreateChangeOrderReq {
        this['expand_new_size'] = expandNewSize;
        return this;
    }
    public set expandNewSize(expandNewSize: number  | undefined) {
        this['expand_new_size'] = expandNewSize;
    }
    public get expandNewSize(): number | undefined {
        return this['expand_new_size'];
    }
    public withNewQuantity(newQuantity: number): CreateChangeOrderReq {
        this['new_quantity'] = newQuantity;
        return this;
    }
    public set newQuantity(newQuantity: number  | undefined) {
        this['new_quantity'] = newQuantity;
    }
    public get newQuantity(): number | undefined {
        return this['new_quantity'];
    }
    public withExclusiveLitesProductId(exclusiveLitesProductId: string): CreateChangeOrderReq {
        this['exclusive_lites_product_id'] = exclusiveLitesProductId;
        return this;
    }
    public set exclusiveLitesProductId(exclusiveLitesProductId: string  | undefined) {
        this['exclusive_lites_product_id'] = exclusiveLitesProductId;
    }
    public get exclusiveLitesProductId(): string | undefined {
        return this['exclusive_lites_product_id'];
    }
    public withCloudServiceConsoleUrl(cloudServiceConsoleUrl: string): CreateChangeOrderReq {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
        return this;
    }
    public set cloudServiceConsoleUrl(cloudServiceConsoleUrl: string  | undefined) {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
    }
    public get cloudServiceConsoleUrl(): string | undefined {
        return this['cloud_service_console_url'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateChangeOrderReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExtendParam(extendParam: OrderExtendParam): CreateChangeOrderReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: OrderExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): OrderExtendParam | undefined {
        return this['extend_param'];
    }
}