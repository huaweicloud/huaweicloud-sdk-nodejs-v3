

export class VolumeTypeExtraSpecs {
    private 'RESKEY:availability_zones'?: string | undefined;
    private 'availability-zone'?: string | undefined;
    private 'os-vendor-extended:sold_out_availability_zones'?: string | undefined;
    private 'volume_backend_name'?: string | undefined;
    private 'HW:availability_zone'?: string | undefined;
    public constructor() { 
    }
    public withRESKEYAvailabilityZones(rESKEYAvailabilityZones: string): VolumeTypeExtraSpecs {
        this['RESKEY:availability_zones'] = rESKEYAvailabilityZones;
        return this;
    }
    public set rESKEYAvailabilityZones(rESKEYAvailabilityZones: string | undefined) {
        this['RESKEY:availability_zones'] = rESKEYAvailabilityZones;
    }
    public get rESKEYAvailabilityZones() {
        return this['RESKEY:availability_zones'];
    }
    public withAvailabilityZone(availabilityZone: string): VolumeTypeExtraSpecs {
        this['availability-zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability-zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability-zone'];
    }
    public withOsVendorExtendedSoldOutAvailabilityZones(osVendorExtendedSoldOutAvailabilityZones: string): VolumeTypeExtraSpecs {
        this['os-vendor-extended:sold_out_availability_zones'] = osVendorExtendedSoldOutAvailabilityZones;
        return this;
    }
    public set osVendorExtendedSoldOutAvailabilityZones(osVendorExtendedSoldOutAvailabilityZones: string | undefined) {
        this['os-vendor-extended:sold_out_availability_zones'] = osVendorExtendedSoldOutAvailabilityZones;
    }
    public get osVendorExtendedSoldOutAvailabilityZones() {
        return this['os-vendor-extended:sold_out_availability_zones'];
    }
    public withVolumeBackendName(volumeBackendName: string): VolumeTypeExtraSpecs {
        this['volume_backend_name'] = volumeBackendName;
        return this;
    }
    public set volumeBackendName(volumeBackendName: string | undefined) {
        this['volume_backend_name'] = volumeBackendName;
    }
    public get volumeBackendName() {
        return this['volume_backend_name'];
    }
    public withHWAvailabilityZone(hWAvailabilityZone: string): VolumeTypeExtraSpecs {
        this['HW:availability_zone'] = hWAvailabilityZone;
        return this;
    }
    public set hWAvailabilityZone(hWAvailabilityZone: string | undefined) {
        this['HW:availability_zone'] = hWAvailabilityZone;
    }
    public get hWAvailabilityZone() {
        return this['HW:availability_zone'];
    }
}