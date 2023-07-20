import { AudioFile } from './AudioFile';
import { ObsObjInfo } from './ObsObjInfo';


export class MpcMultiAudio {
    public output?: ObsObjInfo;
    private 'audio_files'?: Array<AudioFile>;
    private 'output_filename'?: string;
    public constructor() { 
    }
    public withOutput(output: ObsObjInfo): MpcMultiAudio {
        this['output'] = output;
        return this;
    }
    public withAudioFiles(audioFiles: Array<AudioFile>): MpcMultiAudio {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: Array<AudioFile>  | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles(): Array<AudioFile> | undefined {
        return this['audio_files'];
    }
    public withOutputFilename(outputFilename: string): MpcMultiAudio {
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