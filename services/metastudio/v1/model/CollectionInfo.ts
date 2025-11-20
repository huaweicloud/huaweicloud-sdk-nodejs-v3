

export class CollectionInfo {
    private 'collection_type'?: CollectionInfoCollectionTypeEnum | string;
    private 'collection_ids'?: Array<string>;
    public constructor() { 
    }
    public withCollectionType(collectionType: CollectionInfoCollectionTypeEnum | string): CollectionInfo {
        this['collection_type'] = collectionType;
        return this;
    }
    public set collectionType(collectionType: CollectionInfoCollectionTypeEnum | string  | undefined) {
        this['collection_type'] = collectionType;
    }
    public get collectionType(): CollectionInfoCollectionTypeEnum | string | undefined {
        return this['collection_type'];
    }
    public withCollectionIds(collectionIds: Array<string>): CollectionInfo {
        this['collection_ids'] = collectionIds;
        return this;
    }
    public set collectionIds(collectionIds: Array<string>  | undefined) {
        this['collection_ids'] = collectionIds;
    }
    public get collectionIds(): Array<string> | undefined {
        return this['collection_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectionInfoCollectionTypeEnum {
    VOICE = 'VOICE'
}
