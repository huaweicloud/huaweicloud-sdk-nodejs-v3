

export class ResizeEngineInstanceReq {
    private 'oper_type': string | undefined;
    private 'new_storage_space'?: number | undefined;
    private 'new_product_id'?: string | undefined;
    private 'new_broker_num'?: number | undefined;
    private 'new_spec_code'?: string | undefined;
    public constructor(operType?: any) { 
        this['oper_type'] = operType;
    }
    public withOperType(operType: string): ResizeEngineInstanceReq {
        this['oper_type'] = operType;
        return this;
    }
    public set operType(operType: string | undefined) {
        this['oper_type'] = operType;
    }
    public get operType() {
        return this['oper_type'];
    }
    public withNewStorageSpace(newStorageSpace: number): ResizeEngineInstanceReq {
        this['new_storage_space'] = newStorageSpace;
        return this;
    }
    public set newStorageSpace(newStorageSpace: number | undefined) {
        this['new_storage_space'] = newStorageSpace;
    }
    public get newStorageSpace() {
        return this['new_storage_space'];
    }
    public withNewProductId(newProductId: string): ResizeEngineInstanceReq {
        this['new_product_id'] = newProductId;
        return this;
    }
    public set newProductId(newProductId: string | undefined) {
        this['new_product_id'] = newProductId;
    }
    public get newProductId() {
        return this['new_product_id'];
    }
    public withNewBrokerNum(newBrokerNum: number): ResizeEngineInstanceReq {
        this['new_broker_num'] = newBrokerNum;
        return this;
    }
    public set newBrokerNum(newBrokerNum: number | undefined) {
        this['new_broker_num'] = newBrokerNum;
    }
    public get newBrokerNum() {
        return this['new_broker_num'];
    }
    public withNewSpecCode(newSpecCode: string): ResizeEngineInstanceReq {
        this['new_spec_code'] = newSpecCode;
        return this;
    }
    public set newSpecCode(newSpecCode: string | undefined) {
        this['new_spec_code'] = newSpecCode;
    }
    public get newSpecCode() {
        return this['new_spec_code'];
    }
}