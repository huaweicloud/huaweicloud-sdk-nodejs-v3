import { ThumbnailRsp } from './ThumbnailRsp';


export class ThumbnailInfo {
    public sample?: Array<ThumbnailRsp>;
    public dots?: Array<ThumbnailRsp>;
    private 'exec_desc'?: string | undefined;
    private 'thumbnail_status'?: string | undefined;
    public constructor() { 
    }
    public withSample(sample: Array<ThumbnailRsp>): ThumbnailInfo {
        this['sample'] = sample;
        return this;
    }
    public withDots(dots: Array<ThumbnailRsp>): ThumbnailInfo {
        this['dots'] = dots;
        return this;
    }
    public withExecDesc(execDesc: string): ThumbnailInfo {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc() {
        return this['exec_desc'];
    }
    public withThumbnailStatus(thumbnailStatus: string): ThumbnailInfo {
        this['thumbnail_status'] = thumbnailStatus;
        return this;
    }
    public set thumbnailStatus(thumbnailStatus: string | undefined) {
        this['thumbnail_status'] = thumbnailStatus;
    }
    public get thumbnailStatus() {
        return this['thumbnail_status'];
    }
}