

export class ResizeInstanceReq {
    private 'new_spec_code'?: ResizeInstanceReqNewSpecCodeEnum | string;
    private 'new_storage_space'?: number;
    public constructor(newSpecCode?: string, newStorageSpace?: number) { 
        this['new_spec_code'] = newSpecCode;
        this['new_storage_space'] = newStorageSpace;
    }
    public withNewSpecCode(newSpecCode: ResizeInstanceReqNewSpecCodeEnum | string): ResizeInstanceReq {
        this['new_spec_code'] = newSpecCode;
        return this;
    }
    public set newSpecCode(newSpecCode: ResizeInstanceReqNewSpecCodeEnum | string  | undefined) {
        this['new_spec_code'] = newSpecCode;
    }
    public get newSpecCode(): ResizeInstanceReqNewSpecCodeEnum | string | undefined {
        return this['new_spec_code'];
    }
    public withNewStorageSpace(newStorageSpace: number): ResizeInstanceReq {
        this['new_storage_space'] = newStorageSpace;
        return this;
    }
    public set newStorageSpace(newStorageSpace: number  | undefined) {
        this['new_storage_space'] = newStorageSpace;
    }
    public get newStorageSpace(): number | undefined {
        return this['new_storage_space'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResizeInstanceReqNewSpecCodeEnum {
    DMS_INSTANCE_RABBITMQ_CLUSTER_C3_4U8G_3 = 'dms.instance.rabbitmq.cluster.c3.4u8g.3',
    DMS_INSTANCE_RABBITMQ_CLUSTER_C3_4U8G_5 = 'dms.instance.rabbitmq.cluster.c3.4u8g.5',
    DMS_INSTANCE_RABBITMQ_CLUSTER_C3_4U8G_7 = 'dms.instance.rabbitmq.cluster.c3.4u8g.7'
}
