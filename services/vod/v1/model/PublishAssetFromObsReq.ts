import { FileAddr } from './FileAddr';
import { Review } from './Review';
import { Thumbnail } from './Thumbnail';
import { VideoTypeRef } from './VideoTypeRef';


export class PublishAssetFromObsReq {
    private 'video_type': PublishAssetFromObsReqVideoTypeEnum | undefined;
    public title: string;
    public description?: string;
    private 'category_id'?: number | undefined;
    public tags?: string;
    private 'auto_publish'?: number | undefined;
    private 'template_group_name'?: string | undefined;
    private 'auto_encrypt'?: number | undefined;
    private 'auto_preheat'?: number | undefined;
    public thumbnail?: Thumbnail;
    public review?: Review;
    private 'workflow_name'?: string | undefined;
    public input: FileAddr;
    private 'storage_mode'?: number | undefined;
    private 'output_bucket'?: string | undefined;
    private 'output_path'?: string | undefined;
    public constructor(videoType?: any, title?: any, input?: any) { 
        this['video_type'] = videoType;
        this['title'] = title;
        this['input'] = input;
    }
    public withVideoType(videoType: PublishAssetFromObsReqVideoTypeEnum): PublishAssetFromObsReq {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: PublishAssetFromObsReqVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withTitle(title: string): PublishAssetFromObsReq {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): PublishAssetFromObsReq {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: number): PublishAssetFromObsReq {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId() {
        return this['category_id'];
    }
    public withTags(tags: string): PublishAssetFromObsReq {
        this['tags'] = tags;
        return this;
    }
    public withAutoPublish(autoPublish: number): PublishAssetFromObsReq {
        this['auto_publish'] = autoPublish;
        return this;
    }
    public set autoPublish(autoPublish: number | undefined) {
        this['auto_publish'] = autoPublish;
    }
    public get autoPublish() {
        return this['auto_publish'];
    }
    public withTemplateGroupName(templateGroupName: string): PublishAssetFromObsReq {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
        return this['template_group_name'];
    }
    public withAutoEncrypt(autoEncrypt: number): PublishAssetFromObsReq {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt() {
        return this['auto_encrypt'];
    }
    public withAutoPreheat(autoPreheat: number): PublishAssetFromObsReq {
        this['auto_preheat'] = autoPreheat;
        return this;
    }
    public set autoPreheat(autoPreheat: number | undefined) {
        this['auto_preheat'] = autoPreheat;
    }
    public get autoPreheat() {
        return this['auto_preheat'];
    }
    public withThumbnail(thumbnail: Thumbnail): PublishAssetFromObsReq {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withReview(review: Review): PublishAssetFromObsReq {
        this['review'] = review;
        return this;
    }
    public withWorkflowName(workflowName: string): PublishAssetFromObsReq {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName() {
        return this['workflow_name'];
    }
    public withInput(input: FileAddr): PublishAssetFromObsReq {
        this['input'] = input;
        return this;
    }
    public withStorageMode(storageMode: number): PublishAssetFromObsReq {
        this['storage_mode'] = storageMode;
        return this;
    }
    public set storageMode(storageMode: number | undefined) {
        this['storage_mode'] = storageMode;
    }
    public get storageMode() {
        return this['storage_mode'];
    }
    public withOutputBucket(outputBucket: string): PublishAssetFromObsReq {
        this['output_bucket'] = outputBucket;
        return this;
    }
    public set outputBucket(outputBucket: string | undefined) {
        this['output_bucket'] = outputBucket;
    }
    public get outputBucket() {
        return this['output_bucket'];
    }
    public withOutputPath(outputPath: string): PublishAssetFromObsReq {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: string | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath() {
        return this['output_path'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublishAssetFromObsReqVideoTypeEnum {
    MP4 = 'MP4',
    TS = 'TS',
    MOV = 'MOV',
    MXF = 'MXF',
    MPG = 'MPG',
    FLV = 'FLV',
    WMV = 'WMV',
    AVI = 'AVI',
    M4V = 'M4V',
    F4V = 'F4V',
    MPEG = 'MPEG',
    E_3GP = '3GP',
    ASF = 'ASF',
    MKV = 'MKV',
    HLS = 'HLS',
    MP3 = 'MP3',
    OGG = 'OGG',
    WAV = 'WAV',
    WMA = 'WMA',
    APE = 'APE',
    FLAC = 'FLAC',
    AAC = 'AAC',
    AC3 = 'AC3',
    MMF = 'MMF',
    AMR = 'AMR',
    M4A = 'M4A',
    M4R = 'M4R',
    WV = 'WV',
    MP2 = 'MP2',
    RMVB = 'RMVB',
    WEBM = 'WEBM'
}
