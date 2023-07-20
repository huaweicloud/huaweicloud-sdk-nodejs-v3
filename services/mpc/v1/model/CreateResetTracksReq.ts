import { SubAudioFile } from './SubAudioFile';


export class CreateResetTracksReq {
    private 'audio_file'?: SubAudioFile;
    public constructor() { 
    }
    public withAudioFile(audioFile: SubAudioFile): CreateResetTracksReq {
        this['audio_file'] = audioFile;
        return this;
    }
    public set audioFile(audioFile: SubAudioFile  | undefined) {
        this['audio_file'] = audioFile;
    }
    public get audioFile(): SubAudioFile | undefined {
        return this['audio_file'];
    }
}