

export class SecurityRiskResponseImageRiskRiskList {
    public severity?: string;
    private 'image_num'?: number;
    public constructor() { 
    }
    public withSeverity(severity: string): SecurityRiskResponseImageRiskRiskList {
        this['severity'] = severity;
        return this;
    }
    public withImageNum(imageNum: number): SecurityRiskResponseImageRiskRiskList {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
}