import { CoverInfo } from './CoverInfo';
import { FileAddr } from './FileAddr';
import { MetaData } from './MetaData';
import { SubtitleInfo } from './SubtitleInfo';


export class BaseInfo {
    public title?: string;
    private 'video_name'?: string;
    public description?: string;
    private 'category_id'?: number;
    private 'category_name'?: string;
    private 'create_time'?: string;
    private 'last_modified'?: string;
    private 'video_type'?: string;
    public tags?: string;
    private 'meta_data'?: MetaData;
    private 'video_url'?: string;
    private 'sign_url'?: string;
    private 'cover_info_array'?: Array<CoverInfo>;
    private 'subtitle_info'?: Array<SubtitleInfo>;
    private 'source_path'?: FileAddr;
    private 'output_path'?: FileAddr;
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
    public set videoName(videoName: string  | undefined) {
        this['video_name'] = videoName;
    }
    public get videoName(): string | undefined {
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
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): BaseInfo {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withCreateTime(createTime: string): BaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModified(lastModified: string): BaseInfo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): string | undefined {
        return this['last_modified'];
    }
    public withVideoType(videoType: string): BaseInfo {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: string  | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType(): string | undefined {
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
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
    public withVideoUrl(videoUrl: string): BaseInfo {
        this['video_url'] = videoUrl;
        return this;
    }
    public set videoUrl(videoUrl: string  | undefined) {
        this['video_url'] = videoUrl;
    }
    public get videoUrl(): string | undefined {
        return this['video_url'];
    }
    public withSignUrl(signUrl: string): BaseInfo {
        this['sign_url'] = signUrl;
        return this;
    }
    public set signUrl(signUrl: string  | undefined) {
        this['sign_url'] = signUrl;
    }
    public get signUrl(): string | undefined {
        return this['sign_url'];
    }
    public withCoverInfoArray(coverInfoArray: Array<CoverInfo>): BaseInfo {
        this['cover_info_array'] = coverInfoArray;
        return this;
    }
    public set coverInfoArray(coverInfoArray: Array<CoverInfo>  | undefined) {
        this['cover_info_array'] = coverInfoArray;
    }
    public get coverInfoArray(): Array<CoverInfo> | undefined {
        return this['cover_info_array'];
    }
    public withSubtitleInfo(subtitleInfo: Array<SubtitleInfo>): BaseInfo {
        this['subtitle_info'] = subtitleInfo;
        return this;
    }
    public set subtitleInfo(subtitleInfo: Array<SubtitleInfo>  | undefined) {
        this['subtitle_info'] = subtitleInfo;
    }
    public get subtitleInfo(): Array<SubtitleInfo> | undefined {
        return this['subtitle_info'];
    }
    public withSourcePath(sourcePath: FileAddr): BaseInfo {
        this['source_path'] = sourcePath;
        return this;
    }
    public set sourcePath(sourcePath: FileAddr  | undefined) {
        this['source_path'] = sourcePath;
    }
    public get sourcePath(): FileAddr | undefined {
        return this['source_path'];
    }
    public withOutputPath(outputPath: FileAddr): BaseInfo {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: FileAddr  | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath(): FileAddr | undefined {
        return this['output_path'];
    }
}