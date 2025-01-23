import { AudioDriveActionConfig } from './AudioDriveActionConfig';
import { AudioInfo } from './AudioInfo';
import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { LayerConfig } from './LayerConfig';
import { ShootScript } from './ShootScript';
import { TextConfig } from './TextConfig';


export class ShootScriptDetail {
    private 'script_type'?: ShootScriptDetailScriptTypeEnum | string;
    private 'text_config'?: TextConfig;
    private 'audio_drive_action_config'?: Array<AudioDriveActionConfig>;
    private 'audio_drive_file_external_url'?: string;
    private 'background_config'?: Array<BackgroundConfigInfo>;
    private 'layer_config'?: Array<LayerConfig>;
    private 'audio_config'?: AudioInfo;
    private 'thumbnail_url'?: string;
    public constructor() { 
    }
    public withScriptType(scriptType: ShootScriptDetailScriptTypeEnum | string): ShootScriptDetail {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: ShootScriptDetailScriptTypeEnum | string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): ShootScriptDetailScriptTypeEnum | string | undefined {
        return this['script_type'];
    }
    public withTextConfig(textConfig: TextConfig): ShootScriptDetail {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: TextConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): TextConfig | undefined {
        return this['text_config'];
    }
    public withAudioDriveActionConfig(audioDriveActionConfig: Array<AudioDriveActionConfig>): ShootScriptDetail {
        this['audio_drive_action_config'] = audioDriveActionConfig;
        return this;
    }
    public set audioDriveActionConfig(audioDriveActionConfig: Array<AudioDriveActionConfig>  | undefined) {
        this['audio_drive_action_config'] = audioDriveActionConfig;
    }
    public get audioDriveActionConfig(): Array<AudioDriveActionConfig> | undefined {
        return this['audio_drive_action_config'];
    }
    public withAudioDriveFileExternalUrl(audioDriveFileExternalUrl: string): ShootScriptDetail {
        this['audio_drive_file_external_url'] = audioDriveFileExternalUrl;
        return this;
    }
    public set audioDriveFileExternalUrl(audioDriveFileExternalUrl: string  | undefined) {
        this['audio_drive_file_external_url'] = audioDriveFileExternalUrl;
    }
    public get audioDriveFileExternalUrl(): string | undefined {
        return this['audio_drive_file_external_url'];
    }
    public withBackgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>): ShootScriptDetail {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): Array<BackgroundConfigInfo> | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): ShootScriptDetail {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withAudioConfig(audioConfig: AudioInfo): ShootScriptDetail {
        this['audio_config'] = audioConfig;
        return this;
    }
    public set audioConfig(audioConfig: AudioInfo  | undefined) {
        this['audio_config'] = audioConfig;
    }
    public get audioConfig(): AudioInfo | undefined {
        return this['audio_config'];
    }
    public withThumbnailUrl(thumbnailUrl: string): ShootScriptDetail {
        this['thumbnail_url'] = thumbnailUrl;
        return this;
    }
    public set thumbnailUrl(thumbnailUrl: string  | undefined) {
        this['thumbnail_url'] = thumbnailUrl;
    }
    public get thumbnailUrl(): string | undefined {
        return this['thumbnail_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShootScriptDetailScriptTypeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}
