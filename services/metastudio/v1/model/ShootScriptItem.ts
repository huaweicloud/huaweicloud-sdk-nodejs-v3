import { ShootScript } from './ShootScript';
import { ShootScriptItemBaseInfo } from './ShootScriptItemBaseInfo';
import { SubtitleFiles } from './SubtitleFiles';


export class ShootScriptItem {
    private 'sequence_no'?: number;
    private 'shoot_script'?: ShootScript;
    private 'subtitle_file_info'?: SubtitleFiles;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): ShootScriptItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withShootScript(shootScript: ShootScript): ShootScriptItem {
        this['shoot_script'] = shootScript;
        return this;
    }
    public set shootScript(shootScript: ShootScript  | undefined) {
        this['shoot_script'] = shootScript;
    }
    public get shootScript(): ShootScript | undefined {
        return this['shoot_script'];
    }
    public withSubtitleFileInfo(subtitleFileInfo: SubtitleFiles): ShootScriptItem {
        this['subtitle_file_info'] = subtitleFileInfo;
        return this;
    }
    public set subtitleFileInfo(subtitleFileInfo: SubtitleFiles  | undefined) {
        this['subtitle_file_info'] = subtitleFileInfo;
    }
    public get subtitleFileInfo(): SubtitleFiles | undefined {
        return this['subtitle_file_info'];
    }
}