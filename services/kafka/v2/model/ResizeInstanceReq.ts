

export class ResizeInstanceReq {
    private 'new_spec_code'?: string | undefined;
    private 'new_storage_space'?: number | undefined;
    private 'oper_type'?: string | undefined;
    private 'new_broker_num'?: number | undefined;
    private 'new_product_id'?: string | undefined;
    private 'publicip_id'?: string | undefined;
    public constructor() { 
    }
    public withNewSpecCode(newSpecCode: string): ResizeInstanceReq {
        this['new_spec_code'] = newSpecCode;
        return this;
    }
    public set newSpecCode(newSpecCode: string | undefined) {
        this['new_spec_code'] = newSpecCode;
    }
    public get newSpecCode() {
        return this['new_spec_code'];
    }
    public withNewStorageSpace(newStorageSpace: number): ResizeInstanceReq {
        this['new_storage_space'] = newStorageSpace;
        return this;
    }
    public set newStorageSpace(newStorageSpace: number | undefined) {
        this['new_storage_space'] = newStorageSpace;
    }
    public get newStorageSpace() {
        return this['new_storage_space'];
    }
    public withOperType(operType: string): ResizeInstanceReq {
        this['oper_type'] = operType;
        return this;
    }
    public set operType(operType: string | undefined) {
        this['oper_type'] = operType;
    }
    public get operType() {
        return this['oper_type'];
    }
    public withNewBrokerNum(newBrokerNum: number): ResizeInstanceReq {
        this['new_broker_num'] = newBrokerNum;
        return this;
    }
    public set newBrokerNum(newBrokerNum: number | undefined) {
        this['new_broker_num'] = newBrokerNum;
    }
    public get newBrokerNum() {
        return this['new_broker_num'];
    }
    public withNewProductId(newProductId: string): ResizeInstanceReq {
        this['new_product_id'] = newProductId;
        return this;
    }
    public set newProductId(newProductId: string | undefined) {
        this['new_product_id'] = newProductId;
    }
    public get newProductId() {
        return this['new_product_id'];
    }
    public withPublicipId(publicipId: string): ResizeInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
}