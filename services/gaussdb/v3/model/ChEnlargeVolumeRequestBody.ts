

export class ChEnlargeVolumeRequestBody {
    private 'size_in_gb'?: number;
    public constructor(sizeInGb?: number) { 
        this['size_in_gb'] = sizeInGb;
    }
    public withSizeInGb(sizeInGb: number): ChEnlargeVolumeRequestBody {
        this['size_in_gb'] = sizeInGb;
        return this;
    }
    public set sizeInGb(sizeInGb: number  | undefined) {
        this['size_in_gb'] = sizeInGb;
    }
    public get sizeInGb(): number | undefined {
        return this['size_in_gb'];
    }
}