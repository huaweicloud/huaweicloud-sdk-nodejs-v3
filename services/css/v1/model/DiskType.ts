

export class DiskType {
    public availabilityZone?: string;
    public volumeNames?: Array<string>;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): DiskType {
        this['availabilityZone'] = availabilityZone;
        return this;
    }
    public withVolumeNames(volumeNames: Array<string>): DiskType {
        this['volumeNames'] = volumeNames;
        return this;
    }
}