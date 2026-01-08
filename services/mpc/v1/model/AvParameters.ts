import { Audio } from './Audio';
import { Common } from './Common';
import { ObsObjInfo } from './ObsObjInfo';
import { VideoParameters } from './VideoParameters';


export class AvParameters {
    public video?: VideoParameters;
    public audio?: Audio;
    public common?: Common;
    public output?: ObsObjInfo;
    private 'output_filename'?: string;
    public constructor(common?: Common) { 
        this['common'] = common;
    }
    public withVideo(video: VideoParameters): AvParameters {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Audio): AvParameters {
        this['audio'] = audio;
        return this;
    }
    public withCommon(common: Common): AvParameters {
        this['common'] = common;
        return this;
    }
    public withOutput(output: ObsObjInfo): AvParameters {
        this['output'] = output;
        return this;
    }
    public withOutputFilename(outputFilename: string): AvParameters {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
}