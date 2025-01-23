import { AudioDriveActionConfig } from './AudioDriveActionConfig';
import { AudioInfo } from './AudioInfo';
import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { LayerConfig } from './LayerConfig';
import { TextConfig } from './TextConfig';


export class ShootScript {
    private 'script_type'?: ShootScriptScriptTypeEnum | string;
    private 'text_config'?: TextConfig;
    private 'audio_drive_action_config'?: Array<AudioDriveActionConfig>;
    private 'audio_drive_file_external_url'?: string;
    private 'background_config'?: Array<BackgroundConfigInfo>;
    private 'layer_config'?: Array<LayerConfig>;
    private 'audio_config'?: AudioInfo;
    public constructor() { 
    }
    public withScriptType(scriptType: ShootScriptScriptTypeEnum | string): ShootScript {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: ShootScriptScriptTypeEnum | string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): ShootScriptScriptTypeEnum | string | undefined {
        return this['script_type'];
    }
    public withTextConfig(textConfig: TextConfig): ShootScript {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: TextConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): TextConfig | undefined {
        return this['text_config'];
    }
    public withAudioDriveActionConfig(audioDriveActionConfig: Array<AudioDriveActionConfig>): ShootScript {
        this['audio_drive_action_config'] = audioDriveActionConfig;
        return this;
    }
    public set audioDriveActionConfig(audioDriveActionConfig: Array<AudioDriveActionConfig>  | undefined) {
        this['audio_drive_action_config'] = audioDriveActionConfig;
    }
    public get audioDriveActionConfig(): Array<AudioDriveActionConfig> | undefined {
        return this['audio_drive_action_config'];
    }
    public withAudioDriveFileExternalUrl(audioDriveFileExternalUrl: string): ShootScript {
        this['audio_drive_file_external_url'] = audioDriveFileExternalUrl;
        return this;
    }
    public set audioDriveFileExternalUrl(audioDriveFileExternalUrl: string  | undefined) {
        this['audio_drive_file_external_url'] = audioDriveFileExternalUrl;
    }
    public get audioDriveFileExternalUrl(): string | undefined {
        return this['audio_drive_file_external_url'];
    }
    public withBackgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>): ShootScript {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): Array<BackgroundConfigInfo> | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): ShootScript {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withAudioConfig(audioConfig: AudioInfo): ShootScript {
        this['audio_config'] = audioConfig;
        return this;
    }
    public set audioConfig(audioConfig: AudioInfo  | undefined) {
        this['audio_config'] = audioConfig;
    }
    public get audioConfig(): AudioInfo | undefined {
        return this['audio_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShootScriptScriptTypeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}
