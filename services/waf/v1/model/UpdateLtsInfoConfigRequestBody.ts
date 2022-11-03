import { LtsIdInfo } from './LtsIdInfo';


export class UpdateLtsInfoConfigRequestBody {
    public enabale: boolean;
    public ltsIdInfo?: LtsIdInfo;
    public constructor(enabale?: any) { 
        this['enabale'] = enabale;
    }
    public withEnabale(enabale: boolean): UpdateLtsInfoConfigRequestBody {
        this['enabale'] = enabale;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsIdInfo): UpdateLtsInfoConfigRequestBody {
        this['ltsIdInfo'] = ltsIdInfo;
        return this;
    }
}