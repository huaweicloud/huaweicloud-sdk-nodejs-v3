

export class StorageSelectorsMatchLabels {
    public size?: string;
    public volumeType?: string;
    public iops?: string;
    public throughput?: string;
    public metadataEncrypted?: string;
    public metadataCmkid?: string;
    public count?: string;
    public constructor() { 
    }
    public withSize(size: string): StorageSelectorsMatchLabels {
        this['size'] = size;
        return this;
    }
    public withVolumeType(volumeType: string): StorageSelectorsMatchLabels {
        this['volumeType'] = volumeType;
        return this;
    }
    public withIops(iops: string): StorageSelectorsMatchLabels {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: string): StorageSelectorsMatchLabels {
        this['throughput'] = throughput;
        return this;
    }
    public withMetadataEncrypted(metadataEncrypted: string): StorageSelectorsMatchLabels {
        this['metadataEncrypted'] = metadataEncrypted;
        return this;
    }
    public withMetadataCmkid(metadataCmkid: string): StorageSelectorsMatchLabels {
        this['metadataCmkid'] = metadataCmkid;
        return this;
    }
    public withCount(count: string): StorageSelectorsMatchLabels {
        this['count'] = count;
        return this;
    }
}