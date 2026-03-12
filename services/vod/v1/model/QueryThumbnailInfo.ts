import { Thumbnail } from './Thumbnail';


export class QueryThumbnailInfo {
    private 'task_id'?: string;
    private 'thumbnail_para'?: Thumbnail;
    private 'thumbnail_count'?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): QueryThumbnailInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withThumbnailPara(thumbnailPara: Thumbnail): QueryThumbnailInfo {
        this['thumbnail_para'] = thumbnailPara;
        return this;
    }
    public set thumbnailPara(thumbnailPara: Thumbnail  | undefined) {
        this['thumbnail_para'] = thumbnailPara;
    }
    public get thumbnailPara(): Thumbnail | undefined {
        return this['thumbnail_para'];
    }
    public withThumbnailCount(thumbnailCount: number): QueryThumbnailInfo {
        this['thumbnail_count'] = thumbnailCount;
        return this;
    }
    public set thumbnailCount(thumbnailCount: number  | undefined) {
        this['thumbnail_count'] = thumbnailCount;
    }
    public get thumbnailCount(): number | undefined {
        return this['thumbnail_count'];
    }
}