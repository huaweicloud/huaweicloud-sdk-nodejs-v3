import { LiveAudioConfig } from './LiveAudioConfig';
import { TextConfig } from './TextConfig';


export class LiveShootScriptItem {
    private 'sequence_no'?: number;
    public title?: string;
    private 'text_config'?: TextConfig;
    private 'audio_config'?: LiveAudioConfig;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): LiveShootScriptItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withTitle(title: string): LiveShootScriptItem {
        this['title'] = title;
        return this;
    }
    public withTextConfig(textConfig: TextConfig): LiveShootScriptItem {
        this['text_config'] = textConfig;
        return this;
    }
    public set textConfig(textConfig: TextConfig  | undefined) {
        this['text_config'] = textConfig;
    }
    public get textConfig(): TextConfig | undefined {
        return this['text_config'];
    }
    public withAudioConfig(audioConfig: LiveAudioConfig): LiveShootScriptItem {
        this['audio_config'] = audioConfig;
        return this;
    }
    public set audioConfig(audioConfig: LiveAudioConfig  | undefined) {
        this['audio_config'] = audioConfig;
    }
    public get audioConfig(): LiveAudioConfig | undefined {
        return this['audio_config'];
    }
}