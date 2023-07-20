import { AddSubtitle } from './AddSubtitle';
import { DeleteSubtitle } from './DeleteSubtitle';


export class SubtitleModifyReq {
    private 'asset_id'?: string;
    private 'default_language'?: string;
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