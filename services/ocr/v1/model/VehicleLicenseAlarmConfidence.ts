

export class VehicleLicenseAlarmConfidence {
    private 'blocking_within_border_score'?: number;
    private 'border_integrity_score'?: number;
    public constructor() { 
    }
    public withBlockingWithinBorderScore(blockingWithinBorderScore: number): VehicleLicenseAlarmConfidence {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
        return this;
    }
    public set blockingWithinBorderScore(blockingWithinBorderScore: number  | undefined) {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
    }
    public get blockingWithinBorderScore(): number | undefined {
        return this['blocking_within_border_score'];
    }
    public withBorderIntegrityScore(borderIntegrityScore: number): VehicleLicenseAlarmConfidence {
        this['border_integrity_score'] = borderIntegrityScore;
        return this;
    }
    public set borderIntegrityScore(borderIntegrityScore: number  | undefined) {
        this['border_integrity_score'] = borderIntegrityScore;
    }
    public get borderIntegrityScore(): number | undefined {
        return this['border_integrity_score'];
    }
}