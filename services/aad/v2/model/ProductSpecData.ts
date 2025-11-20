

export class ProductSpecData {
    private 'product_uuid'?: string;
    private 'isp_spec'?: string;
    private 'data_center'?: string;
    private 'spec_type'?: number;
    private 'basic_bandwidth'?: number;
    private 'elastic_bandwidth'?: number;
    private 'service_bandwidth'?: number;
    private 'port_num'?: number;
    private 'bind_domain_num'?: number;
    private 'elastic_service_bandwidth'?: number;
    private 'elastic_service_bandwidth_type'?: number;
    private 'main_resource_type'?: string;
    private 'main_resource_spec_code'?: string;
    private 'main_resource_product_id'?: string;
    public constructor() { 
    }
    public withProductUuid(productUuid: string): ProductSpecData {
        this['product_uuid'] = productUuid;
        return this;
    }
    public set productUuid(productUuid: string  | undefined) {
        this['product_uuid'] = productUuid;
    }
    public get productUuid(): string | undefined {
        return this['product_uuid'];
    }
    public withIspSpec(ispSpec: string): ProductSpecData {
        this['isp_spec'] = ispSpec;
        return this;
    }
    public set ispSpec(ispSpec: string  | undefined) {
        this['isp_spec'] = ispSpec;
    }
    public get ispSpec(): string | undefined {
        return this['isp_spec'];
    }
    public withDataCenter(dataCenter: string): ProductSpecData {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withSpecType(specType: number): ProductSpecData {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: number  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): number | undefined {
        return this['spec_type'];
    }
    public withBasicBandwidth(basicBandwidth: number): ProductSpecData {
        this['basic_bandwidth'] = basicBandwidth;
        return this;
    }
    public set basicBandwidth(basicBandwidth: number  | undefined) {
        this['basic_bandwidth'] = basicBandwidth;
    }
    public get basicBandwidth(): number | undefined {
        return this['basic_bandwidth'];
    }
    public withElasticBandwidth(elasticBandwidth: number): ProductSpecData {
        this['elastic_bandwidth'] = elasticBandwidth;
        return this;
    }
    public set elasticBandwidth(elasticBandwidth: number  | undefined) {
        this['elastic_bandwidth'] = elasticBandwidth;
    }
    public get elasticBandwidth(): number | undefined {
        return this['elastic_bandwidth'];
    }
    public withServiceBandwidth(serviceBandwidth: number): ProductSpecData {
        this['service_bandwidth'] = serviceBandwidth;
        return this;
    }
    public set serviceBandwidth(serviceBandwidth: number  | undefined) {
        this['service_bandwidth'] = serviceBandwidth;
    }
    public get serviceBandwidth(): number | undefined {
        return this['service_bandwidth'];
    }
    public withPortNum(portNum: number): ProductSpecData {
        this['port_num'] = portNum;
        return this;
    }
    public set portNum(portNum: number  | undefined) {
        this['port_num'] = portNum;
    }
    public get portNum(): number | undefined {
        return this['port_num'];
    }
    public withBindDomainNum(bindDomainNum: number): ProductSpecData {
        this['bind_domain_num'] = bindDomainNum;
        return this;
    }
    public set bindDomainNum(bindDomainNum: number  | undefined) {
        this['bind_domain_num'] = bindDomainNum;
    }
    public get bindDomainNum(): number | undefined {
        return this['bind_domain_num'];
    }
    public withElasticServiceBandwidth(elasticServiceBandwidth: number): ProductSpecData {
        this['elastic_service_bandwidth'] = elasticServiceBandwidth;
        return this;
    }
    public set elasticServiceBandwidth(elasticServiceBandwidth: number  | undefined) {
        this['elastic_service_bandwidth'] = elasticServiceBandwidth;
    }
    public get elasticServiceBandwidth(): number | undefined {
        return this['elastic_service_bandwidth'];
    }
    public withElasticServiceBandwidthType(elasticServiceBandwidthType: number): ProductSpecData {
        this['elastic_service_bandwidth_type'] = elasticServiceBandwidthType;
        return this;
    }
    public set elasticServiceBandwidthType(elasticServiceBandwidthType: number  | undefined) {
        this['elastic_service_bandwidth_type'] = elasticServiceBandwidthType;
    }
    public get elasticServiceBandwidthType(): number | undefined {
        return this['elastic_service_bandwidth_type'];
    }
    public withMainResourceType(mainResourceType: string): ProductSpecData {
        this['main_resource_type'] = mainResourceType;
        return this;
    }
    public set mainResourceType(mainResourceType: string  | undefined) {
        this['main_resource_type'] = mainResourceType;
    }
    public get mainResourceType(): string | undefined {
        return this['main_resource_type'];
    }
    public withMainResourceSpecCode(mainResourceSpecCode: string): ProductSpecData {
        this['main_resource_spec_code'] = mainResourceSpecCode;
        return this;
    }
    public set mainResourceSpecCode(mainResourceSpecCode: string  | undefined) {
        this['main_resource_spec_code'] = mainResourceSpecCode;
    }
    public get mainResourceSpecCode(): string | undefined {
        return this['main_resource_spec_code'];
    }
    public withMainResourceProductId(mainResourceProductId: string): ProductSpecData {
        this['main_resource_product_id'] = mainResourceProductId;
        return this;
    }
    public set mainResourceProductId(mainResourceProductId: string  | undefined) {
        this['main_resource_product_id'] = mainResourceProductId;
    }
    public get mainResourceProductId(): string | undefined {
        return this['main_resource_product_id'];
    }
}