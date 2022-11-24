

export class ListAddressSetListUsingGetRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    private 'key_word'?: string | undefined;
    public limit: number;
    public offset: number;
    public address?: string;
    private 'address_type'?: ListAddressSetListUsingGetRequestAddressTypeEnum | undefined;
    public constructor(projectId?: any, objectId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAddressSetListUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListAddressSetListUsingGetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListAddressSetListUsingGetRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
        return this['key_word'];
    }
    public withLimit(limit: number): ListAddressSetListUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAddressSetListUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withAddress(address: string): ListAddressSetListUsingGetRequest {
        this['address'] = address;
        return this;
    }
    public withAddressType(addressType: ListAddressSetListUsingGetRequestAddressTypeEnum): ListAddressSetListUsingGetRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListAddressSetListUsingGetRequestAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAddressSetListUsingGetRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
