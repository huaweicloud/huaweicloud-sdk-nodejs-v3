import { LivePlayingShootScriptItem } from './LivePlayingShootScriptItem';


export class LivePlayingScriptInfo {
    private 'script_name'?: string;
    private 'model_asset_id'?: string;
    private 'shoot_scripts'?: Array<LivePlayingShootScriptItem>;
    public constructor() { 
    }
    public withScriptName(scriptName: string): LivePlayingScriptInfo {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withModelAssetId(modelAssetId: string): LivePlayingScriptInfo {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withShootScripts(shootScripts: Array<LivePlayingShootScriptItem>): LivePlayingScriptInfo {
        this['shoot_scripts'] = shootScripts;
        return this;
    }
    public set shootScripts(shootScripts: Array<LivePlayingShootScriptItem>  | undefined) {
        this['shoot_scripts'] = shootScripts;
    }
    public get shootScripts(): Array<LivePlayingShootScriptItem> | undefined {
        return this['shoot_scripts'];
    }
}