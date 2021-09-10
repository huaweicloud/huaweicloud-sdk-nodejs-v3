

export class IdCardRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_verification'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): IdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): IdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): IdCardRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnVerification(returnVerification: boolean): IdCardRequestBody {
        this['return_verification'] = returnVerification;
        return this;
    }
    public set returnVerification(returnVerification: boolean | undefined) {
        this['return_verification'] = returnVerification;
    }
    public get returnVerification() {
        return this['return_verification'];
    }
}