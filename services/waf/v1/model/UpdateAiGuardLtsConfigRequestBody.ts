import { AiGuardLtsIdInfo } from './AiGuardLtsIdInfo';


export class UpdateAiGuardLtsConfigRequestBody {
    public enabled?: boolean;
    private 'lts_id_info'?: AiGuardLtsIdInfo;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): UpdateAiGuardLtsConfigRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: AiGuardLtsIdInfo): UpdateAiGuardLtsConfigRequestBody {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: AiGuardLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): AiGuardLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}