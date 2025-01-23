import { AudioInfo } from './AudioInfo';
import { PreviewInfo } from './PreviewInfo';
import { ShootScriptDetail } from './ShootScriptDetail';
import { ShootScriptItemBaseInfo } from './ShootScriptItemBaseInfo';
import { SubtitleFiles } from './SubtitleFiles';


export class ShootScriptShowItem {
    private 'sequence_no'?: number;
    private 'shoot_script'?: ShootScriptDetail;
    private 'subtitle_file_info'?: SubtitleFiles;
    private 'audio_config'?: AudioInfo;
    private 'preview_info'?: PreviewInfo;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): ShootScriptShowItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withShootScript(shootScript: ShootScriptDetail): ShootScriptShowItem {
        this['shoot_script'] = shootScript;
        return this;
    }
    public set shootScript(shootScript: ShootScriptDetail  | undefined) {
        this['shoot_script'] = shootScript;
    }
    public get shootScript(): ShootScriptDetail | undefined {
        return this['shoot_script'];
    }
    public withSubtitleFileInfo(subtitleFileInfo: SubtitleFiles): ShootScriptShowItem {
        this['subtitle_file_info'] = subtitleFileInfo;
        return this;
    }
    public set subtitleFileInfo(subtitleFileInfo: SubtitleFiles  | undefined) {
        this['subtitle_file_info'] = subtitleFileInfo;
    }
    public get subtitleFileInfo(): SubtitleFiles | undefined {
        return this['subtitle_file_info'];
    }
    public withAudioConfig(audioConfig: AudioInfo): ShootScriptShowItem {
        this['audio_config'] = audioConfig;
        return this;
    }
    public set audioConfig(audioConfig: AudioInfo  | undefined) {
        this['audio_config'] = audioConfig;
    }
    public get audioConfig(): AudioInfo | undefined {
        return this['audio_config'];
    }
    public withPreviewInfo(previewInfo: PreviewInfo): ShootScriptShowItem {
        this['preview_info'] = previewInfo;
        return this;
    }
    public set previewInfo(previewInfo: PreviewInfo  | undefined) {
        this['preview_info'] = previewInfo;
    }
    public get previewInfo(): PreviewInfo | undefined {
        return this['preview_info'];
    }
}