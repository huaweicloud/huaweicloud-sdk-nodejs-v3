import { AudioFile } from './AudioFile';
import { ObsObjInfo } from './ObsObjInfo';
import { TracksInfo } from './TracksInfo';


export class SubAudioFile {
    private 'tracks_info'?: Array<TracksInfo> | undefined;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'output_filename'?: string | undefined;
    public constructor() { 
    }
    public withTracksInfo(tracksInfo: Array<TracksInfo>): SubAudioFile {
        this['tracks_info'] = tracksInfo;
        return this;
    }
    public set tracksInfo(tracksInfo: Array<TracksInfo> | undefined) {
        this['tracks_info'] = tracksInfo;
    }
    public get tracksInfo() {
        return this['tracks_info'];
    }
    public withInput(input: ObsObjInfo): SubAudioFile {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): SubAudioFile {
        this['output'] = output;
        return this;
    }
    public withOutputFilename(outputFilename: string): SubAudioFile {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename() {
        return this['output_filename'];
    }
}