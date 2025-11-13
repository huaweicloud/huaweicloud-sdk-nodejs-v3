import { UpdateLtsConfigRequestBodyLtsIdInfo } from './UpdateLtsConfigRequestBodyLtsIdInfo';


export class UpdateLtsConfigRequestBody {
    public enabled?: boolean;
    private 'lts_id_info'?: UpdateLtsConfigRequestBodyLtsIdInfo;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): UpdateLtsConfigRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: UpdateLtsConfigRequestBodyLtsIdInfo): UpdateLtsConfigRequestBody {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: UpdateLtsConfigRequestBodyLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): UpdateLtsConfigRequestBodyLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}