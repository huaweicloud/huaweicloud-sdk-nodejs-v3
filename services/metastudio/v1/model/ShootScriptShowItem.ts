import { ShootScriptDetail } from './ShootScriptDetail';
import { ShootScriptItemBaseInfo } from './ShootScriptItemBaseInfo';
import { SubtitleFileInfo } from './SubtitleFileInfo';


export class ShootScriptShowItem {
    private 'sequence_no'?: number;
    private 'shoot_script'?: ShootScriptDetail;
    private 'subtitle_file_info'?: SubtitleFileInfo;
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
    public withSubtitleFileInfo(subtitleFileInfo: SubtitleFileInfo): ShootScriptShowItem {
        this['subtitle_file_info'] = subtitleFileInfo;
        return this;
    }
    public set subtitleFileInfo(subtitleFileInfo: SubtitleFileInfo  | undefined) {
        this['subtitle_file_info'] = subtitleFileInfo;
    }
    public get subtitleFileInfo(): SubtitleFileInfo | undefined {
        return this['subtitle_file_info'];
    }
}