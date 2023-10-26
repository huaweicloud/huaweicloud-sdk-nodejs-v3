

export class ResizeEngineInstanceReq {
    private 'oper_type'?: string;
    private 'new_storage_space'?: number;
    private 'new_broker_num'?: number;
    private 'new_product_id'?: string;
    private 'publicip_id'?: string;
    private 'tenant_ips'?: Array<string>;
    private 'second_tenant_subnet_id'?: string;
    public constructor(operType?: string) { 
        this['oper_type'] = operType;
    }
    public withOperType(operType: string): ResizeEngineInstanceReq {
        this['oper_type'] = operType;
        return this;
    }
    public set operType(operType: string  | undefined) {
        this['oper_type'] = operType;
    }
    public get operType(): string | undefined {
        return this['oper_type'];
    }
    public withNewStorageSpace(newStorageSpace: number): ResizeEngineInstanceReq {
        this['new_storage_space'] = newStorageSpace;
        return this;
    }
    public set newStorageSpace(newStorageSpace: number  | undefined) {
        this['new_storage_space'] = newStorageSpace;
    }
    public get newStorageSpace(): number | undefined {
        return this['new_storage_space'];
    }
    public withNewBrokerNum(newBrokerNum: number): ResizeEngineInstanceReq {
        this['new_broker_num'] = newBrokerNum;
        return this;
    }
    public set newBrokerNum(newBrokerNum: number  | undefined) {
        this['new_broker_num'] = newBrokerNum;
    }
    public get newBrokerNum(): number | undefined {
        return this['new_broker_num'];
    }
    public withNewProductId(newProductId: string): ResizeEngineInstanceReq {
        this['new_product_id'] = newProductId;
        return this;
    }
    public set newProductId(newProductId: string  | undefined) {
        this['new_product_id'] = newProductId;
    }
    public get newProductId(): string | undefined {
        return this['new_product_id'];
    }
    public withPublicipId(publicipId: string): ResizeEngineInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withTenantIps(tenantIps: Array<string>): ResizeEngineInstanceReq {
        this['tenant_ips'] = tenantIps;
        return this;
    }
    public set tenantIps(tenantIps: Array<string>  | undefined) {
        this['tenant_ips'] = tenantIps;
    }
    public get tenantIps(): Array<string> | undefined {
        return this['tenant_ips'];
    }
    public withSecondTenantSubnetId(secondTenantSubnetId: string): ResizeEngineInstanceReq {
        this['second_tenant_subnet_id'] = secondTenantSubnetId;
        return this;
    }
    public set secondTenantSubnetId(secondTenantSubnetId: string  | undefined) {
        this['second_tenant_subnet_id'] = secondTenantSubnetId;
    }
    public get secondTenantSubnetId(): string | undefined {
        return this['second_tenant_subnet_id'];
    }
}