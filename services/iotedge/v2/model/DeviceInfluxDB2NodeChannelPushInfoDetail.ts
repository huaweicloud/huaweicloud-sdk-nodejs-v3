

export class DeviceInfluxDB2NodeChannelPushInfoDetail {
    public organization?: string;
    public bucket?: string;
    public constructor() { 
    }
    public withOrganization(organization: string): DeviceInfluxDB2NodeChannelPushInfoDetail {
        this['organization'] = organization;
        return this;
    }
    public withBucket(bucket: string): DeviceInfluxDB2NodeChannelPushInfoDetail {
        this['bucket'] = bucket;
        return this;
    }
}