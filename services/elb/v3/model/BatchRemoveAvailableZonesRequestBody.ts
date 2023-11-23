

export class BatchRemoveAvailableZonesRequestBody {
    private 'availability_zone_list'?: Array<string>;
    public constructor(availabilityZoneList?: Array<string>) { 
        this['availability_zone_list'] = availabilityZoneList;
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): BatchRemoveAvailableZonesRequestBody {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
}