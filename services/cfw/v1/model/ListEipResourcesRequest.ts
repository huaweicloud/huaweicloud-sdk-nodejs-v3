

export class ListEipResourcesRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    private 'key_word'?: string | undefined;
    public status?: ListEipResourcesRequestStatusEnum;
    public sync?: ListEipResourcesRequestSyncEnum;
    public limit: number;
    public offset: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'device_key'?: string | undefined;
    private 'address_type'?: number | undefined;
    private 'fw_instance_id'?: string | undefined;
    private 'fw_key_word'?: string | undefined;
    private 'eps_id'?: string | undefined;
    public constructor(projectId?: any, objectId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListEipResourcesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListEipResourcesRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListEipResourcesRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
        return this['key_word'];
    }
    public withStatus(status: ListEipResourcesRequestStatusEnum): ListEipResourcesRequest {
        this['status'] = status;
        return this;
    }
    public withSync(sync: ListEipResourcesRequestSyncEnum): ListEipResourcesRequest {
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
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDeviceKey(deviceKey: string): ListEipResourcesRequest {
        this['device_key'] = deviceKey;
        return this;
    }
    public set deviceKey(deviceKey: string | undefined) {
        this['device_key'] = deviceKey;
    }
    public get deviceKey() {
        return this['device_key'];
    }
    public withAddressType(addressType: number): ListEipResourcesRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withFwInstanceId(fwInstanceId: string): ListEipResourcesRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withFwKeyWord(fwKeyWord: string): ListEipResourcesRequest {
        this['fw_key_word'] = fwKeyWord;
        return this;
    }
    public set fwKeyWord(fwKeyWord: string | undefined) {
        this['fw_key_word'] = fwKeyWord;
    }
    public get fwKeyWord() {
        return this['fw_key_word'];
    }
    public withEpsId(epsId: string): ListEipResourcesRequest {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId() {
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
