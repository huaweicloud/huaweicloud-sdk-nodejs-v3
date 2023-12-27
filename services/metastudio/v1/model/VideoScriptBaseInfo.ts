

export class VideoScriptBaseInfo {
    private 'script_id'?: string;
    private 'script_name'?: string;
    private 'script_description'?: string;
    private 'model_asset_id'?: string;
    private 'model_asset_type'?: VideoScriptBaseInfoModelAssetTypeEnum | string;
    private 'script_cover_url'?: string;
    private 'script_type'?: string;
    public text?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(scriptId?: string, scriptName?: string) { 
        this['script_id'] = scriptId;
        this['script_name'] = scriptName;
    }
    public withScriptId(scriptId: string): VideoScriptBaseInfo {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): VideoScriptBaseInfo {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptDescription(scriptDescription: string): VideoScriptBaseInfo {
        this['script_description'] = scriptDescription;
        return this;
    }
    public set scriptDescription(scriptDescription: string  | undefined) {
        this['script_description'] = scriptDescription;
    }
    public get scriptDescription(): string | undefined {
        return this['script_description'];
    }
    public withModelAssetId(modelAssetId: string): VideoScriptBaseInfo {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelAssetType(modelAssetType: VideoScriptBaseInfoModelAssetTypeEnum | string): VideoScriptBaseInfo {
        this['model_asset_type'] = modelAssetType;
        return this;
    }
    public set modelAssetType(modelAssetType: VideoScriptBaseInfoModelAssetTypeEnum | string  | undefined) {
        this['model_asset_type'] = modelAssetType;
    }
    public get modelAssetType(): VideoScriptBaseInfoModelAssetTypeEnum | string | undefined {
        return this['model_asset_type'];
    }
    public withScriptCoverUrl(scriptCoverUrl: string): VideoScriptBaseInfo {
        this['script_cover_url'] = scriptCoverUrl;
        return this;
    }
    public set scriptCoverUrl(scriptCoverUrl: string  | undefined) {
        this['script_cover_url'] = scriptCoverUrl;
    }
    public get scriptCoverUrl(): string | undefined {
        return this['script_cover_url'];
    }
    public withScriptType(scriptType: string): VideoScriptBaseInfo {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): string | undefined {
        return this['script_type'];
    }
    public withText(text: string): VideoScriptBaseInfo {
        this['text'] = text;
        return this;
    }
    public withCreateTime(createTime: string): VideoScriptBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): VideoScriptBaseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoScriptBaseInfoModelAssetTypeEnum {
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    HUMAN_MODEL_3D = 'HUMAN_MODEL_3D'
}
