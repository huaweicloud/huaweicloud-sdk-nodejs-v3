import { TtscVoiceModelAssetMeta } from './TtscVoiceModelAssetMeta';


export class TtscAssetExtraMeta {
    private 'voice_model_meta'?: TtscVoiceModelAssetMeta;
    public constructor() { 
    }
    public withVoiceModelMeta(voiceModelMeta: TtscVoiceModelAssetMeta): TtscAssetExtraMeta {
        this['voice_model_meta'] = voiceModelMeta;
        return this;
    }
    public set voiceModelMeta(voiceModelMeta: TtscVoiceModelAssetMeta  | undefined) {
        this['voice_model_meta'] = voiceModelMeta;
    }
    public get voiceModelMeta(): TtscVoiceModelAssetMeta | undefined {
        return this['voice_model_meta'];
    }
}