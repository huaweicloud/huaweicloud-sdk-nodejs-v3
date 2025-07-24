

export class ProgressDetailV2 {
    public ratio?: string;
    public info?: string;
    public constructor() { 
    }
    public withRatio(ratio: string): ProgressDetailV2 {
        this['ratio'] = ratio;
        return this;
    }
    public withInfo(info: string): ProgressDetailV2 {
        this['info'] = info;
        return this;
    }
}