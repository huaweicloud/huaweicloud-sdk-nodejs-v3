import { ObjectImageSpriteTask } from './ObjectImageSpriteTask';
import { ObjectThumbnailTask } from './ObjectThumbnailTask';
import { ObjectTranscodeTask } from './ObjectTranscodeTask';
import { ObsInfo } from './ObsInfo';
import { VideoProcess } from './VideoProcess';
import { WatermarkRequest } from './WatermarkRequest';


export class ObjectProcessReq {
    public input?: ObsInfo;
    public output?: ObsInfo;
    private 'transcode_task'?: Array<ObjectTranscodeTask>;
    private 'video_process'?: VideoProcess;
    public watermarks?: Array<WatermarkRequest>;
    private 'thumbnail_task'?: Array<ObjectThumbnailTask>;
    private 'image_sprite_task'?: Array<ObjectImageSpriteTask>;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(input?: ObsInfo, output?: ObsInfo) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: ObsInfo): ObjectProcessReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsInfo): ObjectProcessReq {
        this['output'] = output;
        return this;
    }
    public withTranscodeTask(transcodeTask: Array<ObjectTranscodeTask>): ObjectProcessReq {
        this['transcode_task'] = transcodeTask;
        return this;
    }
    public set transcodeTask(transcodeTask: Array<ObjectTranscodeTask>  | undefined) {
        this['transcode_task'] = transcodeTask;
    }
    public get transcodeTask(): Array<ObjectTranscodeTask> | undefined {
        return this['transcode_task'];
    }
    public withVideoProcess(videoProcess: VideoProcess): ObjectProcessReq {
        this['video_process'] = videoProcess;
        return this;
    }
    public set videoProcess(videoProcess: VideoProcess  | undefined) {
        this['video_process'] = videoProcess;
    }
    public get videoProcess(): VideoProcess | undefined {
        return this['video_process'];
    }
    public withWatermarks(watermarks: Array<WatermarkRequest>): ObjectProcessReq {
        this['watermarks'] = watermarks;
        return this;
    }
    public withThumbnailTask(thumbnailTask: Array<ObjectThumbnailTask>): ObjectProcessReq {
        this['thumbnail_task'] = thumbnailTask;
        return this;
    }
    public set thumbnailTask(thumbnailTask: Array<ObjectThumbnailTask>  | undefined) {
        this['thumbnail_task'] = thumbnailTask;
    }
    public get thumbnailTask(): Array<ObjectThumbnailTask> | undefined {
        return this['thumbnail_task'];
    }
    public withImageSpriteTask(imageSpriteTask: Array<ObjectImageSpriteTask>): ObjectProcessReq {
        this['image_sprite_task'] = imageSpriteTask;
        return this;
    }
    public set imageSpriteTask(imageSpriteTask: Array<ObjectImageSpriteTask>  | undefined) {
        this['image_sprite_task'] = imageSpriteTask;
    }
    public get imageSpriteTask(): Array<ObjectImageSpriteTask> | undefined {
        return this['image_sprite_task'];
    }
    public withCallbackUrl(callbackUrl: string): ObjectProcessReq {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): ObjectProcessReq {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
}