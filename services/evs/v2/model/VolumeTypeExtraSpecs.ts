

export class VolumeTypeExtraSpecs {
    private 'RESKEY:availability_zones'?: string;
    private 'availability-zone'?: string;
    private 'os-vendor-extended:sold_out_availability_zones'?: string;
    private 'volume_backend_name'?: string;
    private 'HW:availability_zone'?: string;
    public constructor() { 
    }
    public withRESKEYAvailabilityZones(rESKEYAvailabilityZones: string): VolumeTypeExtraSpecs {
        this['RESKEY:availability_zones'] = rESKEYAvailabilityZones;
        return this;
    }
    public set rESKEYAvailabilityZones(rESKEYAvailabilityZones: string  | undefined) {
        this['RESKEY:availability_zones'] = rESKEYAvailabilityZones;
    }
    public get rESKEYAvailabilityZones(): string | undefined {
        return this['RESKEY:availability_zones'];
    }
    public withAvailabilityZone(availabilityZone: string): VolumeTypeExtraSpecs {
        this['availability-zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability-zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability-zone'];
    }
    public withOsVendorExtendedSoldOutAvailabilityZones(osVendorExtendedSoldOutAvailabilityZones: string): VolumeTypeExtraSpecs {
        this['os-vendor-extended:sold_out_availability_zones'] = osVendorExtendedSoldOutAvailabilityZones;
        return this;
    }
    public set osVendorExtendedSoldOutAvailabilityZones(osVendorExtendedSoldOutAvailabilityZones: string  | undefined) {
        this['os-vendor-extended:sold_out_availability_zones'] = osVendorExtendedSoldOutAvailabilityZones;
    }
    public get osVendorExtendedSoldOutAvailabilityZones(): string | undefined {
        return this['os-vendor-extended:sold_out_availability_zones'];
    }
    public withVolumeBackendName(volumeBackendName: string): VolumeTypeExtraSpecs {
        this['volume_backend_name'] = volumeBackendName;
        return this;
    }
    public set volumeBackendName(volumeBackendName: string  | undefined) {
        this['volume_backend_name'] = volumeBackendName;
    }
    public get volumeBackendName(): string | undefined {
        return this['volume_backend_name'];
    }
    public withHWAvailabilityZone(hWAvailabilityZone: string): VolumeTypeExtraSpecs {
        this['HW:availability_zone'] = hWAvailabilityZone;
        return this;
    }
    public set hWAvailabilityZone(hWAvailabilityZone: string  | undefined) {
        this['HW:availability_zone'] = hWAvailabilityZone;
    }
    public get hWAvailabilityZone(): string | undefined {
        return this['HW:availability_zone'];
    }
}