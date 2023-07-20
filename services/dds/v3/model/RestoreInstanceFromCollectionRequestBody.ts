import { RestoreInstanceFromCollectionRequestBodyRestoreCollections } from './RestoreInstanceFromCollectionRequestBodyRestoreCollections';


export class RestoreInstanceFromCollectionRequestBody {
    private 'restore_collections'?: Array<RestoreInstanceFromCollectionRequestBodyRestoreCollections>;
    public constructor(restoreCollections?: Array<RestoreInstanceFromCollectionRequestBodyRestoreCollections>) { 
        this['restore_collections'] = restoreCollections;
    }
    public withRestoreCollections(restoreCollections: Array<RestoreInstanceFromCollectionRequestBodyRestoreCollections>): RestoreInstanceFromCollectionRequestBody {
        this['restore_collections'] = restoreCollections;
        return this;
    }
    public set restoreCollections(restoreCollections: Array<RestoreInstanceFromCollectionRequestBodyRestoreCollections>  | undefined) {
        this['restore_collections'] = restoreCollections;
    }
    public get restoreCollections(): Array<RestoreInstanceFromCollectionRequestBodyRestoreCollections> | undefined {
        return this['restore_collections'];
    }
}