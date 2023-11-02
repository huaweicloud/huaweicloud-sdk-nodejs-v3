import { CatalogMetaDataEventRequest } from './CatalogMetaDataEventRequest';


export class BatchSyncMetadataRequest {
    public body?: CatalogMetaDataEventRequest;
    public constructor() { 
    }
    public withBody(body: CatalogMetaDataEventRequest): BatchSyncMetadataRequest {
        this['body'] = body;
        return this;
    }
}