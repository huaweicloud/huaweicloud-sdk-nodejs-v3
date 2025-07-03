

export class ShowReposTagRespV3 {
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
    public constructor(id?: number, repoId?: number, tag?: string, imageId?: string, manifest?: string, digest?: string, schema?: number, path?: string, internalPath?: string, size?: number, isTrusted?: boolean, created?: string, updated?: string, domainId?: string, tagType?: number) { 
        this['id'] = id;
        this['repo_id'] = repoId;
        this['tag'] = tag;
        this['image_id'] = imageId;
        this['manifest'] = manifest;
        this['digest'] = digest;
        this['schema'] = schema;
        this['path'] = path;
        this['internal_path'] = internalPath;
        this['size'] = size;
        this['is_trusted'] = isTrusted;
        this['created'] = created;
        this['updated'] = updated;
        this['domain_id'] = domainId;
        this['tag_type'] = tagType;
    }
    public withId(id: number): ShowReposTagRespV3 {
        this['id'] = id;
        return this;
    }
    public withRepoId(repoId: number): ShowReposTagRespV3 {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withTag(tag: string): ShowReposTagRespV3 {
        this['tag'] = tag;
        return this;
    }
    public withImageId(imageId: string): ShowReposTagRespV3 {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withManifest(manifest: string): ShowReposTagRespV3 {
        this['manifest'] = manifest;
        return this;
    }
    public withDigest(digest: string): ShowReposTagRespV3 {
        this['digest'] = digest;
        return this;
    }
    public withSchema(schema: number): ShowReposTagRespV3 {
        this['schema'] = schema;
        return this;
    }
    public withPath(path: string): ShowReposTagRespV3 {
        this['path'] = path;
        return this;
    }
    public withInternalPath(internalPath: string): ShowReposTagRespV3 {
        this['internal_path'] = internalPath;
        return this;
    }
    public set internalPath(internalPath: string  | undefined) {
        this['internal_path'] = internalPath;
    }
    public get internalPath(): string | undefined {
        return this['internal_path'];
    }
    public withSize(size: number): ShowReposTagRespV3 {
        this['size'] = size;
        return this;
    }
    public withIsTrusted(isTrusted: boolean): ShowReposTagRespV3 {
        this['is_trusted'] = isTrusted;
        return this;
    }
    public set isTrusted(isTrusted: boolean  | undefined) {
        this['is_trusted'] = isTrusted;
    }
    public get isTrusted(): boolean | undefined {
        return this['is_trusted'];
    }
    public withCreated(created: string): ShowReposTagRespV3 {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowReposTagRespV3 {
        this['updated'] = updated;
        return this;
    }
    public withDomainId(domainId: string): ShowReposTagRespV3 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTagType(tagType: number): ShowReposTagRespV3 {
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