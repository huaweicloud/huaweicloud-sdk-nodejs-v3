import { CollectionInfo } from './CollectionInfo';


export class DeleteTenantUserConfigurationReq {
    private 'my_collections'?: Array<CollectionInfo>;
    public constructor() { 
    }
    public withMyCollections(myCollections: Array<CollectionInfo>): DeleteTenantUserConfigurationReq {
        this['my_collections'] = myCollections;
        return this;
    }
    public set myCollections(myCollections: Array<CollectionInfo>  | undefined) {
        this['my_collections'] = myCollections;
    }
    public get myCollections(): Array<CollectionInfo> | undefined {
        return this['my_collections'];
    }
}