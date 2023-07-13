import { AudioProcess } from './AudioProcess';
import { AudioTrack } from './AudioTrack';
import { AvParameters } from './AvParameters';
import { Crop } from './Crop';
import { Encryption } from './Encryption';
import { MultiAudio } from './MultiAudio';
import { ObsObjInfo } from './ObsObjInfo';
import { Subtitle } from './Subtitle';
import { Thumbnail } from './Thumbnail';
import { VideoProcess } from './VideoProcess';
import { WatermarkRequest } from './WatermarkRequest';


export class CreateTranscodingReq {
    public input?: ObsObjInfo;
    public output: ObsObjInfo;
    private 'trans_template_id'?: Array<number> | undefined;
    private 'av_parameters'?: Array<AvParameters> | undefined;
    private 'output_filenames'?: Array<string> | undefined;
    private 'user_data'?: string | undefined;
    public watermarks?: Array<WatermarkRequest>;
    public thumbnail?: Thumbnail;
    public priority?: number;
    public subtitle?: Subtitle;
    public encryption?: Encryption;
    public crop?: Crop;
    private 'audio_track'?: AudioTrack | undefined;
    private 'multi_audio'?: MultiAudio | undefined;
    private 'video_process'?: VideoProcess | undefined;
    private 'audio_process'?: AudioProcess | undefined;
    public constructor(output?: any) { 
        this['output'] = output;
    }
    public withInput(input: ObsObjInfo): CreateTranscodingReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateTranscodingReq {
        this['output'] = output;
        return this;
    }
    public withTransTemplateId(transTemplateId: Array<number>): CreateTranscodingReq {
        this['trans_template_id'] = transTemplateId;
        return this;
    }
    public set transTemplateId(transTemplateId: Array<number> | undefined) {
        this['trans_template_id'] = transTemplateId;
    }
    public get transTemplateId() {
        return this['trans_template_id'];
    }
    public withAvParameters(avParameters: Array<AvParameters>): CreateTranscodingReq {
        this['av_parameters'] = avParameters;
        return this;
    }
    public set avParameters(avParameters: Array<AvParameters> | undefined) {
        this['av_parameters'] = avParameters;
    }
    public get avParameters() {
        return this['av_parameters'];
    }
    public withOutputFilenames(outputFilenames: Array<string>): CreateTranscodingReq {
        this['output_filenames'] = outputFilenames;
        return this;
    }
    public set outputFilenames(outputFilenames: Array<string> | undefined) {
        this['output_filenames'] = outputFilenames;
    }
    public get outputFilenames() {
        return this['output_filenames'];
    }
    public withUserData(userData: string): CreateTranscodingReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withWatermarks(watermarks: Array<WatermarkRequest>): CreateTranscodingReq {
        this['watermarks'] = watermarks;
        return this;
    }
    public withThumbnail(thumbnail: Thumbnail): CreateTranscodingReq {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withPriority(priority: number): CreateTranscodingReq {
        this['priority'] = priority;
        return this;
    }
    public withSubtitle(subtitle: Subtitle): CreateTranscodingReq {
        this['subtitle'] = subtitle;
        return this;
    }
    public withEncryption(encryption: Encryption): CreateTranscodingReq {
        this['encryption'] = encryption;
        return this;
    }
    public withCrop(crop: Crop): CreateTranscodingReq {
        this['crop'] = crop;
        return this;
    }
    public withAudioTrack(audioTrack: AudioTrack): CreateTranscodingReq {
        this['audio_track'] = audioTrack;
        return this;
    }
    public set audioTrack(audioTrack: AudioTrack | undefined) {
        this['audio_track'] = audioTrack;
    }
    public get audioTrack() {
        return this['audio_track'];
    }
    public withMultiAudio(multiAudio: MultiAudio): CreateTranscodingReq {
        this['multi_audio'] = multiAudio;
        return this;
    }
    public set multiAudio(multiAudio: MultiAudio | undefined) {
        this['multi_audio'] = multiAudio;
    }
    public get multiAudio() {
        return this['multi_audio'];
    }
    public withVideoProcess(videoProcess: VideoProcess): CreateTranscodingReq {
        this['video_process'] = videoProcess;
        return this;
    }
    public set videoProcess(videoProcess: VideoProcess | undefined) {
        this['video_process'] = videoProcess;
    }
    public get videoProcess() {
        return this['video_process'];
    }
    public withAudioProcess(audioProcess: AudioProcess): CreateTranscodingReq {
        this['audio_process'] = audioProcess;
        return this;
    }
    public set audioProcess(audioProcess: AudioProcess | undefined) {
        this['audio_process'] = audioProcess;
    }
    public get audioProcess() {
        return this['audio_process'];
    }
}