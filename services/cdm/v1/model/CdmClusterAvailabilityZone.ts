

export class CdmClusterAvailabilityZone {
    public availableZoneId?: string;
    public availableZoneName?: string;
    public availableZoneCode?: string;
    public azStatus?: string;
    public type?: string;
    public tags?: object;
    public constructor() { 
    }
    public withAvailableZoneId(availableZoneId: string): CdmClusterAvailabilityZone {
        this['availableZoneId'] = availableZoneId;
        return this;
    }
    public withAvailableZoneName(availableZoneName: string): CdmClusterAvailabilityZone {
        this['availableZoneName'] = availableZoneName;
        return this;
    }
    public withAvailableZoneCode(availableZoneCode: string): CdmClusterAvailabilityZone {
        this['availableZoneCode'] = availableZoneCode;
        return this;
    }
    public withAzStatus(azStatus: string): CdmClusterAvailabilityZone {
        this['azStatus'] = azStatus;
        return this;
    }
    public withType(type: string): CdmClusterAvailabilityZone {
        this['type'] = type;
        return this;
    }
    public withTags(tags: object): CdmClusterAvailabilityZone {
        this['tags'] = tags;
        return this;
    }
}