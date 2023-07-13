

export class ExtentionReqDataByIdCardImage {
    private 'idcard_image1': string | undefined;
    private 'idcard_image2'?: string | undefined;
    public constructor(idcardImage1?: any) { 
        this['idcard_image1'] = idcardImage1;
    }
    public withIdcardImage1(idcardImage1: string): ExtentionReqDataByIdCardImage {
        this['idcard_image1'] = idcardImage1;
        return this;
    }
    public set idcardImage1(idcardImage1: string | undefined) {
        this['idcard_image1'] = idcardImage1;
    }
    public get idcardImage1() {
        return this['idcard_image1'];
    }
    public withIdcardImage2(idcardImage2: string): ExtentionReqDataByIdCardImage {
        this['idcard_image2'] = idcardImage2;
        return this;
    }
    public set idcardImage2(idcardImage2: string | undefined) {
        this['idcard_image2'] = idcardImage2;
    }
    public get idcardImage2() {
        return this['idcard_image2'];
    }
}