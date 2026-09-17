

export class DeviceInfluxDB2PushInfo {
    public organization?: string;
    public bucket?: string;
    public format?: string;
    public constructor(organization?: string, bucket?: string, format?: string) { 
        this['organization'] = organization;
        this['bucket'] = bucket;
        this['format'] = format;
    }
    public withOrganization(organization: string): DeviceInfluxDB2PushInfo {
        this['organization'] = organization;
        return this;
    }
    public withBucket(bucket: string): DeviceInfluxDB2PushInfo {
        this['bucket'] = bucket;
        return this;
    }
    public withFormat(format: string): DeviceInfluxDB2PushInfo {
        this['format'] = format;
        return this;
    }
}