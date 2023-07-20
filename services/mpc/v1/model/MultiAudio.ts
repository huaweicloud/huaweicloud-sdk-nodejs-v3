import { AudioFile } from './AudioFile';
import { TracksInfo } from './TracksInfo';


export class MultiAudio {
    private 'tracks_info'?: Array<TracksInfo>;
    private 'audio_files'?: Array<AudioFile>;
    private 'default_language'?: string;
    public constructor() { 
    }
    public withTracksInfo(tracksInfo: Array<TracksInfo>): MultiAudio {
        this['tracks_info'] = tracksInfo;
        return this;
    }
    public set tracksInfo(tracksInfo: Array<TracksInfo>  | undefined) {
        this['tracks_info'] = tracksInfo;
    }
    public get tracksInfo(): Array<TracksInfo> | undefined {
        return this['tracks_info'];
    }
    public withAudioFiles(audioFiles: Array<AudioFile>): MultiAudio {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: Array<AudioFile>  | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles(): Array<AudioFile> | undefined {
        return this['audio_files'];
    }
    public withDefaultLanguage(defaultLanguage: string): MultiAudio {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): string | undefined {
        return this['default_language'];
    }
}