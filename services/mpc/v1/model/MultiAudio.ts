import { AudioFile } from './AudioFile';
import { TracksInfo } from './TracksInfo';


export class MultiAudio {
    private 'tracks_info'?: Array<TracksInfo> | undefined;
    private 'audio_files'?: Array<AudioFile> | undefined;
    private 'default_language'?: string | undefined;
    public constructor() { 
    }
    public withTracksInfo(tracksInfo: Array<TracksInfo>): MultiAudio {
        this['tracks_info'] = tracksInfo;
        return this;
    }
    public set tracksInfo(tracksInfo: Array<TracksInfo> | undefined) {
        this['tracks_info'] = tracksInfo;
    }
    public get tracksInfo() {
        return this['tracks_info'];
    }
    public withAudioFiles(audioFiles: Array<AudioFile>): MultiAudio {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: Array<AudioFile> | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles() {
        return this['audio_files'];
    }
    public withDefaultLanguage(defaultLanguage: string): MultiAudio {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: string | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage() {
        return this['default_language'];
    }
}