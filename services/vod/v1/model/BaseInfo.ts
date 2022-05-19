import { CoverInfo } from './CoverInfo';
import { FileAddr } from './FileAddr';
import { MetaData } from './MetaData';
import { SubtitleInfo } from './SubtitleInfo';


export class BaseInfo {
    public title?: string;
    private 'video_name'?: string | undefined;
    public description?: string;
    private 'category_id'?: number | undefined;
    private 'category_name'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'last_modified'?: string | undefined;
    private 'video_type'?: string | undefined;
    public tags?: string;
    private 'meta_data'?: MetaData | undefined;
    private 'video_url'?: string | undefined;
    private 'sign_url'?: string | undefined;
    private 'cover_info_array'?: Array<CoverInfo> | undefined;
    private 'subtitle_info'?: Array<SubtitleInfo> | undefined;
    private 'source_path'?: FileAddr | undefined;
    private 'output_path'?: FileAddr | undefined;
    public constructor() { 
    }
    public withTitle(title: string): BaseInfo {
        this['title'] = title;
        return this;
    }
    public withVideoName(videoName: string): BaseInfo {
        this['video_name'] = videoName;
        return this;
    }
    public set videoName(videoName: string | undefined) {
        this['video_name'] = videoName;
    }
    public get videoName() {
        return this['video_name'];
    }
    public withDescription(description: string): BaseInfo {
        this['description'] = description;
        return this;
    }
    public withCategoryId(categoryId: number): BaseInfo {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId() {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): BaseInfo {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName() {
        return this['category_name'];
    }
    public withCreateTime(createTime: string): BaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withLastModified(lastModified: string): BaseInfo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withVideoType(videoType: string): BaseInfo {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: string | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withTags(tags: string): BaseInfo {
        this['tags'] = tags;
        return this;
    }
    public withMetaData(metaData: MetaData): BaseInfo {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData() {
        return this['meta_data'];
    }
    public withVideoUrl(videoUrl: string): BaseInfo {
        this['video_url'] = videoUrl;
        return this;
    }
    public set videoUrl(videoUrl: string | undefined) {
        this['video_url'] = videoUrl;
    }
    public get videoUrl() {
        return this['video_url'];
    }
    public withSignUrl(signUrl: string): BaseInfo {
        this['sign_url'] = signUrl;
        return this;
    }
    public set signUrl(signUrl: string | undefined) {
        this['sign_url'] = signUrl;
    }
    public get signUrl() {
        return this['sign_url'];
    }
    public withCoverInfoArray(coverInfoArray: Array<CoverInfo>): BaseInfo {
        this['cover_info_array'] = coverInfoArray;
        return this;
    }
    public set coverInfoArray(coverInfoArray: Array<CoverInfo> | undefined) {
        this['cover_info_array'] = coverInfoArray;
    }
    public get coverInfoArray() {
        return this['cover_info_array'];
    }
    public withSubtitleInfo(subtitleInfo: Array<SubtitleInfo>): BaseInfo {
        this['subtitle_info'] = subtitleInfo;
        return this;
    }
    public set subtitleInfo(subtitleInfo: Array<SubtitleInfo> | undefined) {
        this['subtitle_info'] = subtitleInfo;
    }
    public get subtitleInfo() {
        return this['subtitle_info'];
    }
    public withSourcePath(sourcePath: FileAddr): BaseInfo {
        this['source_path'] = sourcePath;
        return this;
    }
    public set sourcePath(sourcePath: FileAddr | undefined) {
        this['source_path'] = sourcePath;
    }
    public get sourcePath() {
        return this['source_path'];
    }
    public withOutputPath(outputPath: FileAddr): BaseInfo {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: FileAddr | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath() {
        return this['output_path'];
    }
}