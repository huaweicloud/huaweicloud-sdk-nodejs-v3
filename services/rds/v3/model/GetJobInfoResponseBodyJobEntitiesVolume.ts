

export class GetJobInfoResponseBodyJobEntitiesVolume {
    public type?: string;
    private 'original_size'?: string;
    private 'target_size'?: string;
    public constructor() { 
    }
    public withType(type: string): GetJobInfoResponseBodyJobEntitiesVolume {
        this['type'] = type;
        return this;
    }
    public withOriginalSize(originalSize: string): GetJobInfoResponseBodyJobEntitiesVolume {
        this['original_size'] = originalSize;
        return this;
    }
    public set originalSize(originalSize: string  | undefined) {
        this['original_size'] = originalSize;
    }
    public get originalSize(): string | undefined {
        return this['original_size'];
    }
    public withTargetSize(targetSize: string): GetJobInfoResponseBodyJobEntitiesVolume {
        this['target_size'] = targetSize;
        return this;
    }
    public set targetSize(targetSize: string  | undefined) {
        this['target_size'] = targetSize;
    }
    public get targetSize(): string | undefined {
        return this['target_size'];
    }
}