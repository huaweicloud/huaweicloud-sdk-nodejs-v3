import { LtsIdInfo } from './LtsIdInfo';


export class UpdateLtsInfoConfigRequestBody {
    public enabled?: boolean;
    public ltsIdInfo?: LtsIdInfo;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): UpdateLtsInfoConfigRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsIdInfo): UpdateLtsInfoConfigRequestBody {
        this['ltsIdInfo'] = ltsIdInfo;
        return this;
    }
}