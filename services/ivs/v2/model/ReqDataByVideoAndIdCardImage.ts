

export class ReqDataByVideoAndIdCardImage {
    private 'idcard_image1'?: string;
    private 'idcard_image2'?: string;
    public video?: string;
    public actions?: string;
    private 'nod_threshold'?: number;
    public detail?: boolean;
    public constructor(idcardImage1?: string, video?: string, actions?: string) { 
        this['idcard_image1'] = idcardImage1;
        this['video'] = video;
        this['actions'] = actions;
    }
    public withIdcardImage1(idcardImage1: string): ReqDataByVideoAndIdCardImage {
        this['idcard_image1'] = idcardImage1;
        return this;
    }
    public set idcardImage1(idcardImage1: string  | undefined) {
        this['idcard_image1'] = idcardImage1;
    }
    public get idcardImage1(): string | undefined {
        return this['idcard_image1'];
    }
    public withIdcardImage2(idcardImage2: string): ReqDataByVideoAndIdCardImage {
        this['idcard_image2'] = idcardImage2;
        return this;
    }
    public set idcardImage2(idcardImage2: string  | undefined) {
        this['idcard_image2'] = idcardImage2;
    }
    public get idcardImage2(): string | undefined {
        return this['idcard_image2'];
    }
    public withVideo(video: string): ReqDataByVideoAndIdCardImage {
        this['video'] = video;
        return this;
    }
    public withActions(actions: string): ReqDataByVideoAndIdCardImage {
        this['actions'] = actions;
        return this;
    }
    public withNodThreshold(nodThreshold: number): ReqDataByVideoAndIdCardImage {
        this['nod_threshold'] = nodThreshold;
        return this;
    }
    public set nodThreshold(nodThreshold: number  | undefined) {
        this['nod_threshold'] = nodThreshold;
    }
    public get nodThreshold(): number | undefined {
        return this['nod_threshold'];
    }
    public withDetail(detail: boolean): ReqDataByVideoAndIdCardImage {
        this['detail'] = detail;
        return this;
    }
}