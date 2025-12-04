

export class ListObsBucketsResponseBody {
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
    public withResponseHeaders(responseHeaders: object): ListObsBucketsResponseBody {
        this['responseHeaders'] = responseHeaders;
        return this;
    }
    public withOriginalHeaders(originalHeaders: object): ListObsBucketsResponseBody {
        this['originalHeaders'] = originalHeaders;
        return this;
    }
    public withStatusCode(statusCode: number): ListObsBucketsResponseBody {
        this['statusCode'] = statusCode;
        return this;
    }
    public withBucketName(bucketName: string): ListObsBucketsResponseBody {
        this['bucketName'] = bucketName;
        return this;
    }
    public withOwner(owner: object): ListObsBucketsResponseBody {
        this['owner'] = owner;
        return this;
    }
    public withCreationDate(creationDate: number): ListObsBucketsResponseBody {
        this['creationDate'] = creationDate;
        return this;
    }
    public withLocation(location: string): ListObsBucketsResponseBody {
        this['location'] = location;
        return this;
    }
    public withClustertype(clustertype: string): ListObsBucketsResponseBody {
        this['clustertype'] = clustertype;
        return this;
    }
    public withStorageClass(storageClass: string): ListObsBucketsResponseBody {
        this['storageClass'] = storageClass;
        return this;
    }
    public withMetadata(metadata: object): ListObsBucketsResponseBody {
        this['metadata'] = metadata;
        return this;
    }
    public withAcl(acl: string): ListObsBucketsResponseBody {
        this['acl'] = acl;
        return this;
    }
    public withBucketStorageClass(bucketStorageClass: string): ListObsBucketsResponseBody {
        this['bucketStorageClass'] = bucketStorageClass;
        return this;
    }
    public withBucketType(bucketType: string): ListObsBucketsResponseBody {
        this['bucketType'] = bucketType;
        return this;
    }
    public withRequestId(requestId: string): ListObsBucketsResponseBody {
        this['requestId'] = requestId;
        return this;
    }
}