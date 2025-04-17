import { LtsConfigRequestAndResponseLtsIdInfo } from './LtsConfigRequestAndResponseLtsIdInfo';


export class LtsConfigRequestAndResponse {
    public enabled?: boolean;
    private 'lts_id_info'?: LtsConfigRequestAndResponseLtsIdInfo;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): LtsConfigRequestAndResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsConfigRequestAndResponseLtsIdInfo): LtsConfigRequestAndResponse {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: LtsConfigRequestAndResponseLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): LtsConfigRequestAndResponseLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}