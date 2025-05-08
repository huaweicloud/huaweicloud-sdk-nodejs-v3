import { ObjectImageSpriteTask } from './ObjectImageSpriteTask';
import { ObjectThumbnailTask } from './ObjectThumbnailTask';
import { ObjectTranscodeTask } from './ObjectTranscodeTask';
import { ObsInfo } from './ObsInfo';
import { VideoProcess } from './VideoProcess';
import { WatermarkRequest } from './WatermarkRequest';


export class AdditionalObjectProcessReq {
    public output?: ObsInfo;
    private 'transcode_task'?: Array<ObjectTranscodeTask>;
    public watermarks?: Array<WatermarkRequest>;
    private 'thumbnail_task'?: Array<ObjectThumbnailTask>;
    private 'image_sprite_task'?: Array<ObjectImageSpriteTask>;
    private 'video_process'?: VideoProcess;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(output?: ObsInfo) { 
        this['output'] = output;
    }
    public withOutput(output: ObsInfo): AdditionalObjectProcessReq {
        this['output'] = output;
        return this;
    }
    public withTranscodeTask(transcodeTask: Array<ObjectTranscodeTask>): AdditionalObjectProcessReq {
        this['transcode_task'] = transcodeTask;
        return this;
    }
    public set transcodeTask(transcodeTask: Array<ObjectTranscodeTask>  | undefined) {
        this['transcode_task'] = transcodeTask;
    }
    public get transcodeTask(): Array<ObjectTranscodeTask> | undefined {
        return this['transcode_task'];
    }
    public withWatermarks(watermarks: Array<WatermarkRequest>): AdditionalObjectProcessReq {
        this['watermarks'] = watermarks;
        return this;
    }
    public withThumbnailTask(thumbnailTask: Array<ObjectThumbnailTask>): AdditionalObjectProcessReq {
        this['thumbnail_task'] = thumbnailTask;
        return this;
    }
    public set thumbnailTask(thumbnailTask: Array<ObjectThumbnailTask>  | undefined) {
        this['thumbnail_task'] = thumbnailTask;
    }
    public get thumbnailTask(): Array<ObjectThumbnailTask> | undefined {
        return this['thumbnail_task'];
    }
    public withImageSpriteTask(imageSpriteTask: Array<ObjectImageSpriteTask>): AdditionalObjectProcessReq {
        this['image_sprite_task'] = imageSpriteTask;
        return this;
    }
    public set imageSpriteTask(imageSpriteTask: Array<ObjectImageSpriteTask>  | undefined) {
        this['image_sprite_task'] = imageSpriteTask;
    }
    public get imageSpriteTask(): Array<ObjectImageSpriteTask> | undefined {
        return this['image_sprite_task'];
    }
    public withVideoProcess(videoProcess: VideoProcess): AdditionalObjectProcessReq {
        this['video_process'] = videoProcess;
        return this;
    }
    public set videoProcess(videoProcess: VideoProcess  | undefined) {
        this['video_process'] = videoProcess;
    }
    public get videoProcess(): VideoProcess | undefined {
        return this['video_process'];
    }
    public withCallbackUrl(callbackUrl: string): AdditionalObjectProcessReq {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): AdditionalObjectProcessReq {
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