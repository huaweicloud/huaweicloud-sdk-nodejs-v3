

export class ListAreaBandwidthPackageSpecificationsRequest {
    public offset?: number;
    private 'local_area_id'?: Array<string>;
    private 'remote_area_id'?: Array<string>;
    public constructor() { 
    }
    public withOffset(offset: number): ListAreaBandwidthPackageSpecificationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLocalAreaId(localAreaId: Array<string>): ListAreaBandwidthPackageSpecificationsRequest {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: Array<string>  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): Array<string> | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: Array<string>): ListAreaBandwidthPackageSpecificationsRequest {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: Array<string>  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): Array<string> | undefined {
        return this['remote_area_id'];
    }
}