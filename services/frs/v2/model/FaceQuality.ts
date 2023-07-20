

export class FaceQuality {
    private 'total_score'?: number;
    public blur?: number;
    public pose?: number;
    public occlusion?: number;
    public illumination?: number;
    public constructor(totalScore?: number, blur?: number, pose?: number, occlusion?: number, illumination?: number) { 
        this['total_score'] = totalScore;
        this['blur'] = blur;
        this['pose'] = pose;
        this['occlusion'] = occlusion;
        this['illumination'] = illumination;
    }
    public withTotalScore(totalScore: number): FaceQuality {
        this['total_score'] = totalScore;
        return this;
    }
    public set totalScore(totalScore: number  | undefined) {
        this['total_score'] = totalScore;
    }
    public get totalScore(): number | undefined {
        return this['total_score'];
    }
    public withBlur(blur: number): FaceQuality {
        this['blur'] = blur;
        return this;
    }
    public withPose(pose: number): FaceQuality {
        this['pose'] = pose;
        return this;
    }
    public withOcclusion(occlusion: number): FaceQuality {
        this['occlusion'] = occlusion;
        return this;
    }
    public withIllumination(illumination: number): FaceQuality {
        this['illumination'] = illumination;
        return this;
    }
}