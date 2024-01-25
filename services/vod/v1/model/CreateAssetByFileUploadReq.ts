import { Review } from './Review';
import { Subtitle } from './Subtitle';
import { Thumbnail } from './Thumbnail';


export class CreateAssetByFileUploadReq {
    public title?: string;
    public description?: string;
    private 'video_name'?: string;
    private 'video_type'?: string;
    private 'category_id'?: number;
    private 'video_md5'?: string;
    private 'cover_type'?: CreateAssetByFileUploadReqCoverTypeEnum | string;
    private 'cover_md5'?: string;
    public subtitles?: Array<Subtitle>;
    public tags?: string;
    private 'auto_publish'?: CreateAssetByFileUploadReqAutoPublishEnum | number;
    private 'template_group_name'?: string;
    private 'auto_encrypt'?: number;
    private 'auto_preheat'?: string;
    public thumbnail?: Thumbnail;
    public review?: Review;
    private 'workflow_name'?: string;
    public constructor(title?: string, videoName?: string, videoType?: string) { 
        this['title'] = title;
        this['video_name'] = videoName;
        this['video_type'] = videoType;
    }
    public withTitle(title: string): CreateAssetByFileUploadReq {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CreateAssetByFileUploadReq {
        this['description'] = description;
        return this;
    }
    public withVideoName(videoName: string): CreateAssetByFileUploadReq {
        this['video_name'] = videoName;
        return this;
    }
    public set videoName(videoName: string  | undefined) {
        this['video_name'] = videoName;
    }
    public get videoName(): string | undefined {
        return this['video_name'];
    }
    public withVideoType(videoType: string): CreateAssetByFileUploadReq {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: string  | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType(): string | undefined {
        return this['video_type'];
    }
    public withCategoryId(categoryId: number): CreateAssetByFileUploadReq {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withVideoMd5(videoMd5: string): CreateAssetByFileUploadReq {
        this['video_md5'] = videoMd5;
        return this;
    }
    public set videoMd5(videoMd5: string  | undefined) {
        this['video_md5'] = videoMd5;
    }
    public get videoMd5(): string | undefined {
        return this['video_md5'];
    }
    public withCoverType(coverType: CreateAssetByFileUploadReqCoverTypeEnum | string): CreateAssetByFileUploadReq {
        this['cover_type'] = coverType;
        return this;
    }
    public set coverType(coverType: CreateAssetByFileUploadReqCoverTypeEnum | string  | undefined) {
        this['cover_type'] = coverType;
    }
    public get coverType(): CreateAssetByFileUploadReqCoverTypeEnum | string | undefined {
        return this['cover_type'];
    }
    public withCoverMd5(coverMd5: string): CreateAssetByFileUploadReq {
        this['cover_md5'] = coverMd5;
        return this;
    }
    public set coverMd5(coverMd5: string  | undefined) {
        this['cover_md5'] = coverMd5;
    }
    public get coverMd5(): string | undefined {
        return this['cover_md5'];
    }
    public withSubtitles(subtitles: Array<Subtitle>): CreateAssetByFileUploadReq {
        this['subtitles'] = subtitles;
        return this;
    }
    public withTags(tags: string): CreateAssetByFileUploadReq {
        this['tags'] = tags;
        return this;
    }
    public withAutoPublish(autoPublish: CreateAssetByFileUploadReqAutoPublishEnum | number): CreateAssetByFileUploadReq {
        this['auto_publish'] = autoPublish;
        return this;
    }
    public set autoPublish(autoPublish: CreateAssetByFileUploadReqAutoPublishEnum | number  | undefined) {
        this['auto_publish'] = autoPublish;
    }
    public get autoPublish(): CreateAssetByFileUploadReqAutoPublishEnum | number | undefined {
        return this['auto_publish'];
    }
    public withTemplateGroupName(templateGroupName: string): CreateAssetByFileUploadReq {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string  | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName(): string | undefined {
        return this['template_group_name'];
    }
    public withAutoEncrypt(autoEncrypt: number): CreateAssetByFileUploadReq {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number  | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt(): number | undefined {
        return this['auto_encrypt'];
    }
    public withAutoPreheat(autoPreheat: string): CreateAssetByFileUploadReq {
        this['auto_preheat'] = autoPreheat;
        return this;
    }
    public set autoPreheat(autoPreheat: string  | undefined) {
        this['auto_preheat'] = autoPreheat;
    }
    public get autoPreheat(): string | undefined {
        return this['auto_preheat'];
    }
    public withThumbnail(thumbnail: Thumbnail): CreateAssetByFileUploadReq {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withReview(review: Review): CreateAssetByFileUploadReq {
        this['review'] = review;
        return this;
    }
    public withWorkflowName(workflowName: string): CreateAssetByFileUploadReq {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string  | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName(): string | undefined {
        return this['workflow_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAssetByFileUploadReqCoverTypeEnum {
    JPG = 'JPG',
    PNG = 'PNG'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAssetByFileUploadReqAutoPublishEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
