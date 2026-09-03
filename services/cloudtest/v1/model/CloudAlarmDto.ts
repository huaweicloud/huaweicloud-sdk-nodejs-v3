

export class CloudAlarmDto {
    public cloudServiceName?: string;
    public cloudServiceRegionId?: string;
    public cloudServiceSite?: string;
    public enable?: string;
    public level?: string;
    public microServiceGroupName?: string;
    public microServiceName?: string;
    public constructor() { 
    }
    public withCloudServiceName(cloudServiceName: string): CloudAlarmDto {
        this['cloudServiceName'] = cloudServiceName;
        return this;
    }
    public withCloudServiceRegionId(cloudServiceRegionId: string): CloudAlarmDto {
        this['cloudServiceRegionId'] = cloudServiceRegionId;
        return this;
    }
    public withCloudServiceSite(cloudServiceSite: string): CloudAlarmDto {
        this['cloudServiceSite'] = cloudServiceSite;
        return this;
    }
    public withEnable(enable: string): CloudAlarmDto {
        this['enable'] = enable;
        return this;
    }
    public withLevel(level: string): CloudAlarmDto {
        this['level'] = level;
        return this;
    }
    public withMicroServiceGroupName(microServiceGroupName: string): CloudAlarmDto {
        this['microServiceGroupName'] = microServiceGroupName;
        return this;
    }
    public withMicroServiceName(microServiceName: string): CloudAlarmDto {
        this['microServiceName'] = microServiceName;
        return this;
    }
}