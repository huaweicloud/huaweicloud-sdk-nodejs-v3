import { BackgroundConfigInfo } from './BackgroundConfigInfo';
import { LayerConfig } from './LayerConfig';
import { LiveShootScriptItem } from './LiveShootScriptItem';
import { VoiceConfig } from './VoiceConfig';


export class LiveVideoScriptInfo {
    private 'script_id'?: string;
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'dh_id'?: string;
    private 'model_asset_id'?: string;
    private 'voice_config'?: VoiceConfig;
    private 'background_config'?: Array<BackgroundConfigInfo>;
    private 'layer_config'?: Array<LayerConfig>;
    private 'shoot_scripts'?: Array<LiveShootScriptItem>;
    public constructor(scriptName?: string, shootScripts?: Array<LiveShootScriptItem>) { 
        this['script_name'] = scriptName;
        this['shoot_scripts'] = shootScripts;
    }
    public withScriptId(scriptId: string): LiveVideoScriptInfo {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): LiveVideoScriptInfo {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): LiveVideoScriptInfo {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withDhId(dhId: string): LiveVideoScriptInfo {
        this['dh_id'] = dhId;
        return this;
    }
    public set dhId(dhId: string  | undefined) {
        this['dh_id'] = dhId;
    }
    public get dhId(): string | undefined {
        return this['dh_id'];
    }
    public withModelAssetId(modelAssetId: string): LiveVideoScriptInfo {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): LiveVideoScriptInfo {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withBackgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>): LiveVideoScriptInfo {
        this['background_config'] = backgroundConfig;
        return this;
    }
    public set backgroundConfig(backgroundConfig: Array<BackgroundConfigInfo>  | undefined) {
        this['background_config'] = backgroundConfig;
    }
    public get backgroundConfig(): Array<BackgroundConfigInfo> | undefined {
        return this['background_config'];
    }
    public withLayerConfig(layerConfig: Array<LayerConfig>): LiveVideoScriptInfo {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: Array<LayerConfig>  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): Array<LayerConfig> | undefined {
        return this['layer_config'];
    }
    public withShootScripts(shootScripts: Array<LiveShootScriptItem>): LiveVideoScriptInfo {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<LiveShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<LiveShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
}