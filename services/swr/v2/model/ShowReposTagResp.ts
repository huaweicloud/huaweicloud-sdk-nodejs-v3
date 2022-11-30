

export class ShowReposTagResp {
    public id: number;
    private 'repo_id': number | undefined;
    private 'Tag': string | undefined;
    private 'image_id': string | undefined;
    public manifest: string;
    public digest: string;
    public schema: number;
    public path: string;
    private 'internal_path': string | undefined;
    public size: number;
    private 'is_trusted': boolean | undefined;
    public created: string;
    public updated: string;
    public deleted: string;
    private 'domain_id': string | undefined;
    public scanned: boolean;
    private 'tag_type': number | undefined;
    public constructor(id?: any, repoId?: any, tag?: any, imageId?: any, manifest?: any, digest?: any, schema?: any, path?: any, internalPath?: any, size?: any, isTrusted?: any, created?: any, updated?: any, deleted?: any, domainId?: any, scanned?: any, tagType?: any) { 
        this['id'] = id;
        this['repo_id'] = repoId;
        this['Tag'] = tag;
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
        this['deleted'] = deleted;
        this['domain_id'] = domainId;
        this['scanned'] = scanned;
        this['tag_type'] = tagType;
    }
    public withId(id: number): ShowReposTagResp {
        this['id'] = id;
        return this;
    }
    public withRepoId(repoId: number): ShowReposTagResp {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId() {
        return this['repo_id'];
    }
    public withTag(tag: string): ShowReposTagResp {
        this['Tag'] = tag;
        return this;
    }
    public set tag(tag: string | undefined) {
        this['Tag'] = tag;
    }
    public get tag() {
        return this['Tag'];
    }
    public withImageId(imageId: string): ShowReposTagResp {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withManifest(manifest: string): ShowReposTagResp {
        this['manifest'] = manifest;
        return this;
    }
    public withDigest(digest: string): ShowReposTagResp {
        this['digest'] = digest;
        return this;
    }
    public withSchema(schema: number): ShowReposTagResp {
        this['schema'] = schema;
        return this;
    }
    public withPath(path: string): ShowReposTagResp {
        this['path'] = path;
        return this;
    }
    public withInternalPath(internalPath: string): ShowReposTagResp {
        this['internal_path'] = internalPath;
        return this;
    }
    public set internalPath(internalPath: string | undefined) {
        this['internal_path'] = internalPath;
    }
    public get internalPath() {
        return this['internal_path'];
    }
    public withSize(size: number): ShowReposTagResp {
        this['size'] = size;
        return this;
    }
    public withIsTrusted(isTrusted: boolean): ShowReposTagResp {
        this['is_trusted'] = isTrusted;
        return this;
    }
    public set isTrusted(isTrusted: boolean | undefined) {
        this['is_trusted'] = isTrusted;
    }
    public get isTrusted() {
        return this['is_trusted'];
    }
    public withCreated(created: string): ShowReposTagResp {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowReposTagResp {
        this['updated'] = updated;
        return this;
    }
    public withDeleted(deleted: string): ShowReposTagResp {
        this['deleted'] = deleted;
        return this;
    }
    public withDomainId(domainId: string): ShowReposTagResp {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withScanned(scanned: boolean): ShowReposTagResp {
        this['scanned'] = scanned;
        return this;
    }
    public withTagType(tagType: number): ShowReposTagResp {
        this['tag_type'] = tagType;
        return this;
    }
    public set tagType(tagType: number | undefined) {
        this['tag_type'] = tagType;
    }
    public get tagType() {
        return this['tag_type'];
    }
}