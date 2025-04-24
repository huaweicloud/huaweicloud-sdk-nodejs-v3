import { ObsBucketInfoOwner } from './ObsBucketInfoOwner';


export class ObsBucketInfo {
    public responseHeaders?: object;
    public originalHeaders?: object;
    public statusCode?: number;
    public bucketName?: string;
    public owner?: ObsBucketInfoOwner;
    public creationDate?: string;
    public location?: string;
    public storageClass?: object;
    public metadata?: object;
    public acl?: object;
    public bucketStorageClass?: object;
    public bucketType?: string;
    public requestId?: string;
    public constructor() { 
    }
    public withResponseHeaders(responseHeaders: object): ObsBucketInfo {
        this['responseHeaders'] = responseHeaders;
        return this;
    }
    public withOriginalHeaders(originalHeaders: object): ObsBucketInfo {
        this['originalHeaders'] = originalHeaders;
        return this;
    }
    public withStatusCode(statusCode: number): ObsBucketInfo {
        this['statusCode'] = statusCode;
        return this;
    }
    public withBucketName(bucketName: string): ObsBucketInfo {
        this['bucketName'] = bucketName;
        return this;
    }
    public withOwner(owner: ObsBucketInfoOwner): ObsBucketInfo {
        this['owner'] = owner;
        return this;
    }
    public withCreationDate(creationDate: string): ObsBucketInfo {
        this['creationDate'] = creationDate;
        return this;
    }
    public withLocation(location: string): ObsBucketInfo {
        this['location'] = location;
        return this;
    }
    public withStorageClass(storageClass: object): ObsBucketInfo {
        this['storageClass'] = storageClass;
        return this;
    }
    public withMetadata(metadata: object): ObsBucketInfo {
        this['metadata'] = metadata;
        return this;
    }
    public withAcl(acl: object): ObsBucketInfo {
        this['acl'] = acl;
        return this;
    }
    public withBucketStorageClass(bucketStorageClass: object): ObsBucketInfo {
        this['bucketStorageClass'] = bucketStorageClass;
        return this;
    }
    public withBucketType(bucketType: string): ObsBucketInfo {
        this['bucketType'] = bucketType;
        return this;
    }
    public withRequestId(requestId: string): ObsBucketInfo {
        this['requestId'] = requestId;
        return this;
    }
}