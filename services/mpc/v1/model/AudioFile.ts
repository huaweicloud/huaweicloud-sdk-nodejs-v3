import { ObsObjInfo } from './ObsObjInfo';
import { TracksInfo } from './TracksInfo';


export class AudioFile {
    private 'tracks_info'?: Array<TracksInfo> | undefined;
    public input?: ObsObjInfo;
    public constructor() { 
    }
    public withTracksInfo(tracksInfo: Array<TracksInfo>): AudioFile {
        this['tracks_info'] = tracksInfo;
        return this;
    }
    public set tracksInfo(tracksInfo: Array<TracksInfo> | undefined) {
        this['tracks_info'] = tracksInfo;
    }
    public get tracksInfo() {
        return this['tracks_info'];
    }
    public withInput(input: ObsObjInfo): AudioFile {
        this['input'] = input;
        return this;
    }
}