

export class ListDatastoreVersionsRequest {
    private 'datastore_name'?: ListDatastoreVersionsRequestDatastoreNameEnum | string;
    public constructor(datastoreName?: string) { 
        this['datastore_name'] = datastoreName;
    }
    public withDatastoreName(datastoreName: ListDatastoreVersionsRequestDatastoreNameEnum | string): ListDatastoreVersionsRequest {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: ListDatastoreVersionsRequestDatastoreNameEnum | string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): ListDatastoreVersionsRequestDatastoreNameEnum | string | undefined {
        return this['datastore_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatastoreVersionsRequestDatastoreNameEnum {
    DDS_COMMUNITY = 'DDS-Community',
    DDS_ENHANCED = 'DDS-Enhanced'
}
