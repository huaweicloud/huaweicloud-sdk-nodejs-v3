

export class HtapStorageTypeStorageType {
    public name?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'min_volume_size'?: number;
    public constructor() { 
    }
    public withName(name: string): HtapStorageTypeStorageType {
        this['name'] = name;
        return this;
    }
    public withAzStatus(azStatus: { [key: string]: string; }): HtapStorageTypeStorageType {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withMinVolumeSize(minVolumeSize: number): HtapStorageTypeStorageType {
        this['min_volume_size'] = minVolumeSize;
        return this;
    }
    public set minVolumeSize(minVolumeSize: number  | undefined) {
        this['min_volume_size'] = minVolumeSize;
    }
    public get minVolumeSize(): number | undefined {
        return this['min_volume_size'];
    }
}