

export class ReqDataByIdCardImage {
    private 'idcard_image1'?: string;
    private 'idcard_image2'?: string;
    private 'face_image'?: string;
    public constructor(idcardImage1?: string, faceImage?: string) { 
        this['idcard_image1'] = idcardImage1;
        this['face_image'] = faceImage;
    }
    public withIdcardImage1(idcardImage1: string): ReqDataByIdCardImage {
        this['idcard_image1'] = idcardImage1;
        return this;
    }
    public set idcardImage1(idcardImage1: string  | undefined) {
        this['idcard_image1'] = idcardImage1;
    }
    public get idcardImage1(): string | undefined {
        return this['idcard_image1'];
    }
    public withIdcardImage2(idcardImage2: string): ReqDataByIdCardImage {
        this['idcard_image2'] = idcardImage2;
        return this;
    }
    public set idcardImage2(idcardImage2: string  | undefined) {
        this['idcard_image2'] = idcardImage2;
    }
    public get idcardImage2(): string | undefined {
        return this['idcard_image2'];
    }
    public withFaceImage(faceImage: string): ReqDataByIdCardImage {
        this['face_image'] = faceImage;
        return this;
    }
    public set faceImage(faceImage: string  | undefined) {
        this['face_image'] = faceImage;
    }
    public get faceImage(): string | undefined {
        return this['face_image'];
    }
}