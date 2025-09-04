

export class VolumeBatchDetachRequest {
    public serverinfo?: Array<string>;
    public constructor() { 
    }
    public withServerinfo(serverinfo: Array<string>): VolumeBatchDetachRequest {
        this['serverinfo'] = serverinfo;
        return this;
    }
}