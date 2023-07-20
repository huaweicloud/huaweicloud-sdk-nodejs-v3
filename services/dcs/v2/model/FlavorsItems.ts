import { AttrsObject } from './AttrsObject';
import { FlavorAzObject } from './FlavorAzObject';


export class FlavorsItems {
    private 'spec_code'?: string;
    private 'cloud_service_type_code'?: string;
    private 'cloud_resource_type_code'?: string;
    private 'cache_mode'?: string;
    public engine?: string;
    private 'engine_version'?: string;
    private 'product_type'?: string;
    private 'cpu_type'?: string;
    private 'storage_type'?: string;
    public capacity?: Array<string>;
    private 'billing_mode'?: Array<string>;
    private 'tenant_ip_count'?: number;
    private 'pricing_type'?: string;
    private 'is_dec'?: boolean;
    public attrs?: Array<AttrsObject>;
    private 'flavors_available_zones'?: Array<FlavorAzObject>;
    public constructor() { 
    }
    public withSpecCode(specCode: string): FlavorsItems {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withCloudServiceTypeCode(cloudServiceTypeCode: string): FlavorsItems {
        this['cloud_service_type_code'] = cloudServiceTypeCode;
        return this;
    }
    public set cloudServiceTypeCode(cloudServiceTypeCode: string  | undefined) {
        this['cloud_service_type_code'] = cloudServiceTypeCode;
    }
    public get cloudServiceTypeCode(): string | undefined {
        return this['cloud_service_type_code'];
    }
    public withCloudResourceTypeCode(cloudResourceTypeCode: string): FlavorsItems {
        this['cloud_resource_type_code'] = cloudResourceTypeCode;
        return this;
    }
    public set cloudResourceTypeCode(cloudResourceTypeCode: string  | undefined) {
        this['cloud_resource_type_code'] = cloudResourceTypeCode;
    }
    public get cloudResourceTypeCode(): string | undefined {
        return this['cloud_resource_type_code'];
    }
    public withCacheMode(cacheMode: string): FlavorsItems {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): string | undefined {
        return this['cache_mode'];
    }
    public withEngine(engine: string): FlavorsItems {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): FlavorsItems {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withProductType(productType: string): FlavorsItems {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withCpuType(cpuType: string): FlavorsItems {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string  | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType(): string | undefined {
        return this['cpu_type'];
    }
    public withStorageType(storageType: string): FlavorsItems {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withCapacity(capacity: Array<string>): FlavorsItems {
        this['capacity'] = capacity;
        return this;
    }
    public withBillingMode(billingMode: Array<string>): FlavorsItems {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: Array<string>  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): Array<string> | undefined {
        return this['billing_mode'];
    }
    public withTenantIpCount(tenantIpCount: number): FlavorsItems {
        this['tenant_ip_count'] = tenantIpCount;
        return this;
    }
    public set tenantIpCount(tenantIpCount: number  | undefined) {
        this['tenant_ip_count'] = tenantIpCount;
    }
    public get tenantIpCount(): number | undefined {
        return this['tenant_ip_count'];
    }
    public withPricingType(pricingType: string): FlavorsItems {
        this['pricing_type'] = pricingType;
        return this;
    }
    public set pricingType(pricingType: string  | undefined) {
        this['pricing_type'] = pricingType;
    }
    public get pricingType(): string | undefined {
        return this['pricing_type'];
    }
    public withIsDec(isDec: boolean): FlavorsItems {
        this['is_dec'] = isDec;
        return this;
    }
    public set isDec(isDec: boolean  | undefined) {
        this['is_dec'] = isDec;
    }
    public get isDec(): boolean | undefined {
        return this['is_dec'];
    }
    public withAttrs(attrs: Array<AttrsObject>): FlavorsItems {
        this['attrs'] = attrs;
        return this;
    }
    public withFlavorsAvailableZones(flavorsAvailableZones: Array<FlavorAzObject>): FlavorsItems {
        this['flavors_available_zones'] = flavorsAvailableZones;
        return this;
    }
    public set flavorsAvailableZones(flavorsAvailableZones: Array<FlavorAzObject>  | undefined) {
        this['flavors_available_zones'] = flavorsAvailableZones;
    }
    public get flavorsAvailableZones(): Array<FlavorAzObject> | undefined {
        return this['flavors_available_zones'];
    }
}