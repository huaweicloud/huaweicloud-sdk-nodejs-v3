

export class InsurancePolicyRequestBody {
    public image: string;
    private 'detect_direction'?: boolean | undefined;
    public constructor(image?: any) { 
        this['image'] = image;
    }
    public withImage(image: string): InsurancePolicyRequestBody {
        this['image'] = image;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): InsurancePolicyRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection() {
        return this['detect_direction'];
    }
}