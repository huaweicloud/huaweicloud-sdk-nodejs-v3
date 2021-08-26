

export class FaceQuality {
    private 'total_score': number | undefined;
    public blur: number;
    public pose: number;
    public occlusion: number;
    public illumination: number;
    public constructor(totalScore?: any, blur?: any, pose?: any, occlusion?: any, illumination?: any) { 
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
    public set totalScore(totalScore: number | undefined) {
        this['total_score'] = totalScore;
    }
    public get totalScore() {
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