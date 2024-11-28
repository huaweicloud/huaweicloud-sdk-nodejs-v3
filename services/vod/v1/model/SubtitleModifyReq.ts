import { AddSubtitle } from './AddSubtitle';
import { DeleteSubtitle } from './DeleteSubtitle';


export class SubtitleModifyReq {
    private 'asset_id'?: string;
    private 'default_language'?: string;
    private 'repackage_mode'?: SubtitleModifyReqRepackageModeEnum | string;
    private 'delete_mode'?: SubtitleModifyReqDeleteModeEnum | string;
    private 'add_subtitles'?: Array<AddSubtitle>;
    private 'delete_subtitles'?: Array<DeleteSubtitle>;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): SubtitleModifyReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withDefaultLanguage(defaultLanguage: string): SubtitleModifyReq {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): string | undefined {
        return this['default_language'];
    }
    public withRepackageMode(repackageMode: SubtitleModifyReqRepackageModeEnum | string): SubtitleModifyReq {
        this['repackage_mode'] = repackageMode;
        return this;
    }
    public set repackageMode(repackageMode: SubtitleModifyReqRepackageModeEnum | string  | undefined) {
        this['repackage_mode'] = repackageMode;
    }
    public get repackageMode(): SubtitleModifyReqRepackageModeEnum | string | undefined {
        return this['repackage_mode'];
    }
    public withDeleteMode(deleteMode: SubtitleModifyReqDeleteModeEnum | string): SubtitleModifyReq {
        this['delete_mode'] = deleteMode;
        return this;
    }
    public set deleteMode(deleteMode: SubtitleModifyReqDeleteModeEnum | string  | undefined) {
        this['delete_mode'] = deleteMode;
    }
    public get deleteMode(): SubtitleModifyReqDeleteModeEnum | string | undefined {
        return this['delete_mode'];
    }
    public withAddSubtitles(addSubtitles: Array<AddSubtitle>): SubtitleModifyReq {
        this['add_subtitles'] = addSubtitles;
        return this;
    }
    public set addSubtitles(addSubtitles: Array<AddSubtitle>  | undefined) {
        this['add_subtitles'] = addSubtitles;
    }
    public get addSubtitles(): Array<AddSubtitle> | undefined {
        return this['add_subtitles'];
    }
    public withDeleteSubtitles(deleteSubtitles: Array<DeleteSubtitle>): SubtitleModifyReq {
        this['delete_subtitles'] = deleteSubtitles;
        return this;
    }
    public set deleteSubtitles(deleteSubtitles: Array<DeleteSubtitle>  | undefined) {
        this['delete_subtitles'] = deleteSubtitles;
    }
    public get deleteSubtitles(): Array<DeleteSubtitle> | undefined {
        return this['delete_subtitles'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubtitleModifyReqRepackageModeEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum SubtitleModifyReqDeleteModeEnum {
    E_0 = '0',
    E_1 = '1'
}
