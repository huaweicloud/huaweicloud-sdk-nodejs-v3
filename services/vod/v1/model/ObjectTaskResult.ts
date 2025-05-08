import { ImageSpriteTask } from './ImageSpriteTask';
import { ThumbnailTask } from './ThumbnailTask';
import { TranscodeTask } from './TranscodeTask';


export class ObjectTaskResult {
    private 'task_type'?: string;
    private 'transcode_task'?: TranscodeTask;
    private 'thumbnail_task'?: ThumbnailTask;
    private 'image_sprite_task'?: ImageSpriteTask;
    public constructor() { 
    }
    public withTaskType(taskType: string): ObjectTaskResult {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTranscodeTask(transcodeTask: TranscodeTask): ObjectTaskResult {
        this['transcode_task'] = transcodeTask;
        return this;
    }
    public set transcodeTask(transcodeTask: TranscodeTask  | undefined) {
        this['transcode_task'] = transcodeTask;
    }
    public get transcodeTask(): TranscodeTask | undefined {
        return this['transcode_task'];
    }
    public withThumbnailTask(thumbnailTask: ThumbnailTask): ObjectTaskResult {
        this['thumbnail_task'] = thumbnailTask;
        return this;
    }
    public set thumbnailTask(thumbnailTask: ThumbnailTask  | undefined) {
        this['thumbnail_task'] = thumbnailTask;
    }
    public get thumbnailTask(): ThumbnailTask | undefined {
        return this['thumbnail_task'];
    }
    public withImageSpriteTask(imageSpriteTask: ImageSpriteTask): ObjectTaskResult {
        this['image_sprite_task'] = imageSpriteTask;
        return this;
    }
    public set imageSpriteTask(imageSpriteTask: ImageSpriteTask  | undefined) {
        this['image_sprite_task'] = imageSpriteTask;
    }
    public get imageSpriteTask(): ImageSpriteTask | undefined {
        return this['image_sprite_task'];
    }
}