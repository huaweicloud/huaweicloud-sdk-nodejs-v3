
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryResponse extends SdkResponse {
    public id?: number;
    private 'ns_id'?: number | undefined;
    public name?: string;
    public category?: string;
    public description?: string;
    private 'creator_id'?: string | undefined;
    private 'creator_name'?: string | undefined;
    public size?: number;
    private 'is_public'?: boolean | undefined;
    private 'num_images'?: number | undefined;
    private 'num_download'?: number | undefined;
    public url?: string;
    public path?: string;
    private 'internal_path'?: string | undefined;
    public created?: string;
    public updated?: string;
    private 'domain_id'?: string | undefined;
    public priority?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowRepositoryResponse {
        this['id'] = id;
        return this;
    }
    public withNsId(nsId: number): ShowRepositoryResponse {
        this['ns_id'] = nsId;
        return this;
    }
    public set nsId(nsId: number | undefined) {
        this['ns_id'] = nsId;
    }
    public get nsId() {
        return this['ns_id'];
    }
    public withName(name: string): ShowRepositoryResponse {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ShowRepositoryResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ShowRepositoryResponse {
        this['description'] = description;
        return this;
    }
    public withCreatorId(creatorId: string): ShowRepositoryResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId() {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowRepositoryResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withSize(size: number): ShowRepositoryResponse {
        this['size'] = size;
        return this;
    }
    public withIsPublic(isPublic: boolean): ShowRepositoryResponse {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic() {
        return this['is_public'];
    }
    public withNumImages(numImages: number): ShowRepositoryResponse {
        this['num_images'] = numImages;
        return this;
    }
    public set numImages(numImages: number | undefined) {
        this['num_images'] = numImages;
    }
    public get numImages() {
        return this['num_images'];
    }
    public withNumDownload(numDownload: number): ShowRepositoryResponse {
        this['num_download'] = numDownload;
        return this;
    }
    public set numDownload(numDownload: number | undefined) {
        this['num_download'] = numDownload;
    }
    public get numDownload() {
        return this['num_download'];
    }
    public withUrl(url: string): ShowRepositoryResponse {
        this['url'] = url;
        return this;
    }
    public withPath(path: string): ShowRepositoryResponse {
        this['path'] = path;
        return this;
    }
    public withInternalPath(internalPath: string): ShowRepositoryResponse {
        this['internal_path'] = internalPath;
        return this;
    }
    public set internalPath(internalPath: string | undefined) {
        this['internal_path'] = internalPath;
    }
    public get internalPath() {
        return this['internal_path'];
    }
    public withCreated(created: string): ShowRepositoryResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowRepositoryResponse {
        this['updated'] = updated;
        return this;
    }
    public withDomainId(domainId: string): ShowRepositoryResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withPriority(priority: number): ShowRepositoryResponse {
        this['priority'] = priority;
        return this;
    }
}