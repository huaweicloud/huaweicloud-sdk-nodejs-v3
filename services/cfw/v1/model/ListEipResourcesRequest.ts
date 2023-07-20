

export class ListEipResourcesRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'key_word'?: string;
    public status?: ListEipResourcesRequestStatusEnum | string;
    public sync?: ListEipResourcesRequestSyncEnum | number;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    private 'device_key'?: string;
    private 'address_type'?: number;
    private 'fw_instance_id'?: string;
    private 'fw_key_word'?: string;
    private 'eps_id'?: string;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListEipResourcesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListEipResourcesRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListEipResourcesRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withStatus(status: ListEipResourcesRequestStatusEnum | string): ListEipResourcesRequest {
        this['status'] = status;
        return this;
    }
    public withSync(sync: ListEipResourcesRequestSyncEnum | number): ListEipResourcesRequest {
        this['sync'] = sync;
        return this;
    }
    public withLimit(limit: number): ListEipResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEipResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEipResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDeviceKey(deviceKey: string): ListEipResourcesRequest {
        this['device_key'] = deviceKey;
        return this;
    }
    public set deviceKey(deviceKey: string  | undefined) {
        this['device_key'] = deviceKey;
    }
    public get deviceKey(): string | undefined {
        return this['device_key'];
    }
    public withAddressType(addressType: number): ListEipResourcesRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withFwInstanceId(fwInstanceId: string): ListEipResourcesRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withFwKeyWord(fwKeyWord: string): ListEipResourcesRequest {
        this['fw_key_word'] = fwKeyWord;
        return this;
    }
    public set fwKeyWord(fwKeyWord: string  | undefined) {
        this['fw_key_word'] = fwKeyWord;
    }
    public get fwKeyWord(): string | undefined {
        return this['fw_key_word'];
    }
    public withEpsId(epsId: string): ListEipResourcesRequest {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEipResourcesRequestStatusEnum {
    NULL = 'null',
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEipResourcesRequestSyncEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
