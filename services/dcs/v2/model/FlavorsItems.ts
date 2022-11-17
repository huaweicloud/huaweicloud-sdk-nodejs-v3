import { AttrsObject } from './AttrsObject';
import { FlavorAzObject } from './FlavorAzObject';


export class FlavorsItems {
    private 'spec_code'?: string | undefined;
    private 'cloud_service_type_code'?: string | undefined;
    private 'cloud_resource_type_code'?: string | undefined;
    private 'cache_mode'?: string | undefined;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    private 'product_type'?: string | undefined;
    private 'cpu_type'?: string | undefined;
    private 'storage_type'?: string | undefined;
    public capacity?: Array<string>;
    private 'billing_mode'?: Array<string> | undefined;
    private 'tenant_ip_count'?: number | undefined;
    private 'pricing_type'?: string | undefined;
    private 'is_dec'?: boolean | undefined;
    public attrs?: Array<AttrsObject>;
    private 'flavors_available_zones'?: Array<FlavorAzObject> | undefined;
    public constructor() { 
    }
    public withSpecCode(specCode: string): FlavorsItems {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withCloudServiceTypeCode(cloudServiceTypeCode: string): FlavorsItems {
        this['cloud_service_type_code'] = cloudServiceTypeCode;
        return this;
    }
    public set cloudServiceTypeCode(cloudServiceTypeCode: string | undefined) {
        this['cloud_service_type_code'] = cloudServiceTypeCode;
    }
    public get cloudServiceTypeCode() {
        return this['cloud_service_type_code'];
    }
    public withCloudResourceTypeCode(cloudResourceTypeCode: string): FlavorsItems {
        this['cloud_resource_type_code'] = cloudResourceTypeCode;
        return this;
    }
    public set cloudResourceTypeCode(cloudResourceTypeCode: string | undefined) {
        this['cloud_resource_type_code'] = cloudResourceTypeCode;
    }
    public get cloudResourceTypeCode() {
        return this['cloud_resource_type_code'];
    }
    public withCacheMode(cacheMode: string): FlavorsItems {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode() {
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
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withProductType(productType: string): FlavorsItems {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withCpuType(cpuType: string): FlavorsItems {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType() {
        return this['cpu_type'];
    }
    public withStorageType(storageType: string): FlavorsItems {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType() {
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
    public set billingMode(billingMode: Array<string> | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode() {
        return this['billing_mode'];
    }
    public withTenantIpCount(tenantIpCount: number): FlavorsItems {
        this['tenant_ip_count'] = tenantIpCount;
        return this;
    }
    public set tenantIpCount(tenantIpCount: number | undefined) {
        this['tenant_ip_count'] = tenantIpCount;
    }
    public get tenantIpCount() {
        return this['tenant_ip_count'];
    }
    public withPricingType(pricingType: string): FlavorsItems {
        this['pricing_type'] = pricingType;
        return this;
    }
    public set pricingType(pricingType: string | undefined) {
        this['pricing_type'] = pricingType;
    }
    public get pricingType() {
        return this['pricing_type'];
    }
    public withIsDec(isDec: boolean): FlavorsItems {
        this['is_dec'] = isDec;
        return this;
    }
    public set isDec(isDec: boolean | undefined) {
        this['is_dec'] = isDec;
    }
    public get isDec() {
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
    public set flavorsAvailableZones(flavorsAvailableZones: Array<FlavorAzObject> | undefined) {
        this['flavors_available_zones'] = flavorsAvailableZones;
    }
    public get flavorsAvailableZones() {
        return this['flavors_available_zones'];
    }
}