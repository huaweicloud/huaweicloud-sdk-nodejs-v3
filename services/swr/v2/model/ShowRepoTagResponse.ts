
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepoTagResponse extends SdkResponse {
    public id?: number;
    private 'repo_id'?: number;
    public tag?: string;
    private 'image_id'?: string;
    public manifest?: string;
    public digest?: string;
    public schema?: number;
    public path?: string;
    private 'internal_path'?: string;
    public size?: number;
    private 'is_trusted'?: boolean;
    public created?: string;
    public updated?: string;
    private 'domain_id'?: string;
    private 'tag_type'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowRepoTagResponse {
        this['id'] = id;
        return this;
    }
    public withRepoId(repoId: number): ShowRepoTagResponse {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withTag(tag: string): ShowRepoTagResponse {
        this['tag'] = tag;
        return this;
    }
    public withImageId(imageId: string): ShowRepoTagResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withManifest(manifest: string): ShowRepoTagResponse {
        this['manifest'] = manifest;
        return this;
    }
    public withDigest(digest: string): ShowRepoTagResponse {
        this['digest'] = digest;
        return this;
    }
    public withSchema(schema: number): ShowRepoTagResponse {
        this['schema'] = schema;
        return this;
    }
    public withPath(path: string): ShowRepoTagResponse {
        this['path'] = path;
        return this;
    }
    public withInternalPath(internalPath: string): ShowRepoTagResponse {
        this['internal_path'] = internalPath;
        return this;
    }
    public set internalPath(internalPath: string  | undefined) {
        this['internal_path'] = internalPath;
    }
    public get internalPath(): string | undefined {
        return this['internal_path'];
    }
    public withSize(size: number): ShowRepoTagResponse {
        this['size'] = size;
        return this;
    }
    public withIsTrusted(isTrusted: boolean): ShowRepoTagResponse {
        this['is_trusted'] = isTrusted;
        return this;
    }
    public set isTrusted(isTrusted: boolean  | undefined) {
        this['is_trusted'] = isTrusted;
    }
    public get isTrusted(): boolean | undefined {
        return this['is_trusted'];
    }
    public withCreated(created: string): ShowRepoTagResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowRepoTagResponse {
        this['updated'] = updated;
        return this;
    }
    public withDomainId(domainId: string): ShowRepoTagResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTagType(tagType: number): ShowRepoTagResponse {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: number  | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType(): number | undefined {
        return this['tag_type'];
    }
}