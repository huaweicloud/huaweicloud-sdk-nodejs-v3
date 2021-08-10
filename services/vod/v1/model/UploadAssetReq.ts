import { Subtitle } from './Subtitle';


export class UploadAssetReq {
    private 'asset_id': string | undefined;
    private 'video_md5'?: string | undefined;
    private 'video_name'?: string | undefined;
    private 'video_type'?: UploadAssetReqVideoTypeEnum | undefined;
    private 'cover_id'?: number | undefined;
    private 'cover_type'?: UploadAssetReqCoverTypeEnum | undefined;
    private 'cover_md5'?: string | undefined;
    public subtitles?: Array<Subtitle>;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): UploadAssetReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withVideoMd5(videoMd5: string): UploadAssetReq {
        this['video_md5'] = videoMd5;
        return this;
    }
    public set videoMd5(videoMd5: string | undefined) {
        this['video_md5'] = videoMd5;
    }
    public get videoMd5() {
        return this['video_md5'];
    }
    public withVideoName(videoName: string): UploadAssetReq {
        this['video_name'] = videoName;
        return this;
    }
    public set videoName(videoName: string | undefined) {
        this['video_name'] = videoName;
    }
    public get videoName() {
        return this['video_name'];
    }
    public withVideoType(videoType: UploadAssetReqVideoTypeEnum): UploadAssetReq {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: UploadAssetReqVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withCoverId(coverId: number): UploadAssetReq {
        this['cover_id'] = coverId;
        return this;
    }
    public set coverId(coverId: number | undefined) {
        this['cover_id'] = coverId;
    }
    public get coverId() {
        return this['cover_id'];
    }
    public withCoverType(coverType: UploadAssetReqCoverTypeEnum): UploadAssetReq {
        this['cover_type'] = coverType;
        return this;
    }
    public set coverType(coverType: UploadAssetReqCoverTypeEnum | undefined) {
        this['cover_type'] = coverType;
    }
    public get coverType() {
        return this['cover_type'];
    }
    public withCoverMd5(coverMd5: string): UploadAssetReq {
        this['cover_md5'] = coverMd5;
        return this;
    }
    public set coverMd5(coverMd5: string | undefined) {
        this['cover_md5'] = coverMd5;
    }
    public get coverMd5() {
        return this['cover_md5'];
    }
    public withSubtitles(subtitles: Array<Subtitle>): UploadAssetReq {
        this['subtitles'] = subtitles;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadAssetReqVideoTypeEnum {
    MP4 = 'MP4',
    TS = 'TS',
    MOV = 'MOV',
    MXF = 'MXF',
    MPG = 'MPG',
    FLV = 'FLV',
    WMV = 'WMV',
    HLS = 'HLS',
    MP3 = 'MP3',
    WMA = 'WMA',
    APE = 'APE',
    FLAC = 'FLAC',
    AAC = 'AAC',
    AC3 = 'AC3',
    MMF = 'MMF',
    AMR = 'AMR',
    M4A = 'M4A',
    M4R = 'M4R',
    OGG = 'OGG',
    WAV = 'WAV',
    WV = 'WV',
    MP2 = 'MP2',
    AVI = 'AVI',
    F4V = 'F4V',
    M4V = 'M4V',
    MPEG = 'MPEG',
    UNKNOW = 'UNKNOW'
}
/**
    * @export
    * @enum {string}
    */
export enum UploadAssetReqCoverTypeEnum {
    JPG = 'JPG',
    PNG = 'PNG'
}
