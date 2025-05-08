import { MetaAudioInfo } from './MetaAudioInfo';
import { MetaVideoInfo } from './MetaVideoInfo';


export class ObjectMetaData {
    public bitrate?: number;
    public container?: string;
    public duration?: number;
    private 'video_duration'?: number;
    private 'audio_duration'?: number;
    private 'float_duration'?: number;
    public height?: number;
    public width?: number;
    public md5?: string;
    public rotate?: number;
    public size?: number;
    private 'video_stream_list'?: Array<MetaVideoInfo>;
    private 'audio_stream_list'?: Array<MetaAudioInfo>;
    public constructor() { 
    }
    public withBitrate(bitrate: number): ObjectMetaData {
        this['bitrate'] = bitrate;
        return this;
    }
    public withContainer(container: string): ObjectMetaData {
        this['container'] = container;
        return this;
    }
    public withDuration(duration: number): ObjectMetaData {
        this['duration'] = duration;
        return this;
    }
    public withVideoDuration(videoDuration: number): ObjectMetaData {
        this['video_duration'] = videoDuration;
        return this;
    }
    public set videoDuration(videoDuration: number  | undefined) {
        this['video_duration'] = videoDuration;
    }
    public get videoDuration(): number | undefined {
        return this['video_duration'];
    }
    public withAudioDuration(audioDuration: number): ObjectMetaData {
        this['audio_duration'] = audioDuration;
        return this;
    }
    public set audioDuration(audioDuration: number  | undefined) {
        this['audio_duration'] = audioDuration;
    }
    public get audioDuration(): number | undefined {
        return this['audio_duration'];
    }
    public withFloatDuration(floatDuration: number): ObjectMetaData {
        this['float_duration'] = floatDuration;
        return this;
    }
    public set floatDuration(floatDuration: number  | undefined) {
        this['float_duration'] = floatDuration;
    }
    public get floatDuration(): number | undefined {
        return this['float_duration'];
    }
    public withHeight(height: number): ObjectMetaData {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): ObjectMetaData {
        this['width'] = width;
        return this;
    }
    public withMd5(md5: string): ObjectMetaData {
        this['md5'] = md5;
        return this;
    }
    public withRotate(rotate: number): ObjectMetaData {
        this['rotate'] = rotate;
        return this;
    }
    public withSize(size: number): ObjectMetaData {
        this['size'] = size;
        return this;
    }
    public withVideoStreamList(videoStreamList: Array<MetaVideoInfo>): ObjectMetaData {
        this['video_stream_list'] = videoStreamList;
        return this;
    }
    public set videoStreamList(videoStreamList: Array<MetaVideoInfo>  | undefined) {
        this['video_stream_list'] = videoStreamList;
    }
    public get videoStreamList(): Array<MetaVideoInfo> | undefined {
        return this['video_stream_list'];
    }
    public withAudioStreamList(audioStreamList: Array<MetaAudioInfo>): ObjectMetaData {
        this['audio_stream_list'] = audioStreamList;
        return this;
    }
    public set audioStreamList(audioStreamList: Array<MetaAudioInfo>  | undefined) {
        this['audio_stream_list'] = audioStreamList;
    }
    public get audioStreamList(): Array<MetaAudioInfo> | undefined {
        return this['audio_stream_list'];
    }
}