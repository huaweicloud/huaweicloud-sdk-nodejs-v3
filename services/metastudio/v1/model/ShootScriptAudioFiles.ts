import { ShootScriptAudioFileItem } from './ShootScriptAudioFileItem';


export class ShootScriptAudioFiles {
    private 'audio_file_url'?: Array<ShootScriptAudioFileItem>;
    public constructor() { 
    }
    public withAudioFileUrl(audioFileUrl: Array<ShootScriptAudioFileItem>): ShootScriptAudioFiles {
        this['audio_file_url'] = audioFileUrl;
        return this;
    }
    public set audioFileUrl(audioFileUrl: Array<ShootScriptAudioFileItem>  | undefined) {
        this['audio_file_url'] = audioFileUrl;
    }
    public get audioFileUrl(): Array<ShootScriptAudioFileItem> | undefined {
        return this['audio_file_url'];
    }
}