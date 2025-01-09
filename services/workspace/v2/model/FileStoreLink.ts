import { BucketStore } from './BucketStore';
import { FileStoreTypeEnum } from './FileStoreTypeEnum';


export class FileStoreLink {
    private 'store_type'?: FileStoreTypeEnum;
    private 'bucket_store'?: BucketStore;
    private 'file_link'?: string;
    public constructor(storeType?: FileStoreTypeEnum) { 
        this['store_type'] = storeType;
    }
    public withStoreType(storeType: FileStoreTypeEnum): FileStoreLink {
        this['store_type'] = storeType;
        return this;
    }
    public set storeType(storeType: FileStoreTypeEnum  | undefined) {
        this['store_type'] = storeType;
    }
    public get storeType(): FileStoreTypeEnum | undefined {
        return this['store_type'];
    }
    public withBucketStore(bucketStore: BucketStore): FileStoreLink {
        this['bucket_store'] = bucketStore;
        return this;
    }
    public set bucketStore(bucketStore: BucketStore  | undefined) {
        this['bucket_store'] = bucketStore;
    }
    public get bucketStore(): BucketStore | undefined {
        return this['bucket_store'];
    }
    public withFileLink(fileLink: string): FileStoreLink {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
}