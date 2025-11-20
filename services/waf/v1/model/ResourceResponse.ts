

export class ResourceResponse {
    public resourceId?: string;
    public cloudServiceType?: string;
    public resourceType?: string;
    public resourceSpecCode?: string;
    public status?: number;
    public expireTime?: string;
    public resourceSize?: number;
    public timestamp?: number;
    public relativeType?: number;
    public region?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceResponse {
        this['resourceId'] = resourceId;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): ResourceResponse {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): ResourceResponse {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): ResourceResponse {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withStatus(status: number): ResourceResponse {
        this['status'] = status;
        return this;
    }
    public withExpireTime(expireTime: string): ResourceResponse {
        this['expireTime'] = expireTime;
        return this;
    }
    public withResourceSize(resourceSize: number): ResourceResponse {
        this['resourceSize'] = resourceSize;
        return this;
    }
    public withTimestamp(timestamp: number): ResourceResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withRelativeType(relativeType: number): ResourceResponse {
        this['relativeType'] = relativeType;
        return this;
    }
    public withRegion(region: string): ResourceResponse {
        this['region'] = region;
        return this;
    }
}