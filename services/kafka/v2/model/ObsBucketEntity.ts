

export class ObsBucketEntity {
    public responseHeaders?: object;
    public originalHeaders?: object;
    public statusCode?: number;
    public bucketName?: string;
    public owner?: object;
    public creationDate?: number;
    public location?: string;
    public clustertype?: string;
    public storageClass?: string;
    public metadata?: object;
    public acl?: string;
    public bucketStorageClass?: string;
    public bucketType?: string;
    public requestId?: string;
    public constructor() { 
    }
    public withResponseHeaders(responseHeaders: object): ObsBucketEntity {
        this['responseHeaders'] = responseHeaders;
        return this;
    }
    public withOriginalHeaders(originalHeaders: object): ObsBucketEntity {
        this['originalHeaders'] = originalHeaders;
        return this;
    }
    public withStatusCode(statusCode: number): ObsBucketEntity {
        this['statusCode'] = statusCode;
        return this;
    }
    public withBucketName(bucketName: string): ObsBucketEntity {
        this['bucketName'] = bucketName;
        return this;
    }
    public withOwner(owner: object): ObsBucketEntity {
        this['owner'] = owner;
        return this;
    }
    public withCreationDate(creationDate: number): ObsBucketEntity {
        this['creationDate'] = creationDate;
        return this;
    }
    public withLocation(location: string): ObsBucketEntity {
        this['location'] = location;
        return this;
    }
    public withClustertype(clustertype: string): ObsBucketEntity {
        this['clustertype'] = clustertype;
        return this;
    }
    public withStorageClass(storageClass: string): ObsBucketEntity {
        this['storageClass'] = storageClass;
        return this;
    }
    public withMetadata(metadata: object): ObsBucketEntity {
        this['metadata'] = metadata;
        return this;
    }
    public withAcl(acl: string): ObsBucketEntity {
        this['acl'] = acl;
        return this;
    }
    public withBucketStorageClass(bucketStorageClass: string): ObsBucketEntity {
        this['bucketStorageClass'] = bucketStorageClass;
        return this;
    }
    public withBucketType(bucketType: string): ObsBucketEntity {
        this['bucketType'] = bucketType;
        return this;
    }
    public withRequestId(requestId: string): ObsBucketEntity {
        this['requestId'] = requestId;
        return this;
    }
}