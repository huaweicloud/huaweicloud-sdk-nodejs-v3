

export class ResizeEngineInstanceReq {
    private 'oper_type'?: string;
    private 'new_storage_space'?: number;
    private 'new_product_id'?: string;
    private 'new_broker_num'?: number;
    private 'publicip_id'?: string;
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
}