

export class VolumeBatchDetachRequest {
    public serverinfo?: Array<string>;
    public constructor(serverinfo?: Array<string>) { 
        this['serverinfo'] = serverinfo;
    }
    public withServerinfo(serverinfo: Array<string>): VolumeBatchDetachRequest {
        this['serverinfo'] = serverinfo;
        return this;
    }
}