

export class DatabaseInfoItem {
    public name?: string;
    private 'data_size'?: string;
    private 'storage_size'?: string;
    private 'collection_num'?: number;
    public constructor() { 
    }
    public withName(name: string): DatabaseInfoItem {
        this['name'] = name;
        return this;
    }
    public withDataSize(dataSize: string): DatabaseInfoItem {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: string  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): string | undefined {
        return this['data_size'];
    }
    public withStorageSize(storageSize: string): DatabaseInfoItem {
        this['storage_size'] = storageSize;
        return this;
    }
    public set storageSize(storageSize: string  | undefined) {
        this['storage_size'] = storageSize;
    }
    public get storageSize(): string | undefined {
        return this['storage_size'];
    }
    public withCollectionNum(collectionNum: number): DatabaseInfoItem {
        this['collection_num'] = collectionNum;
        return this;
    }
    public set collectionNum(collectionNum: number  | undefined) {
        this['collection_num'] = collectionNum;
    }
    public get collectionNum(): number | undefined {
        return this['collection_num'];
    }
}