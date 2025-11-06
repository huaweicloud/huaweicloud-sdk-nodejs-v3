import { RepositoryCommitDto } from './RepositoryCommitDto';


export class LogTreeDto {
    public name?: string;
    public path?: string;
    public type?: string;
    public commit?: RepositoryCommitDto;
    private 'blob_id'?: string;
    private 'submodule_url'?: string;
    private 'is_limited'?: boolean;
    private 'submodule_link'?: string;
    public md5?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withName(name: string): LogTreeDto {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): LogTreeDto {
        this['path'] = path;
        return this;
    }
    public withType(type: string): LogTreeDto {
        this['type'] = type;
        return this;
    }
    public withCommit(commit: RepositoryCommitDto): LogTreeDto {
        this['commit'] = commit;
        return this;
    }
    public withBlobId(blobId: string): LogTreeDto {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withSubmoduleUrl(submoduleUrl: string): LogTreeDto {
        this['submodule_url'] = submoduleUrl;
        return this;
    }
    public set submoduleUrl(submoduleUrl: string  | undefined) {
        this['submodule_url'] = submoduleUrl;
    }
    public get submoduleUrl(): string | undefined {
        return this['submodule_url'];
    }
    public withIsLimited(isLimited: boolean): LogTreeDto {
        this['is_limited'] = isLimited;
        return this;
    }
    public set isLimited(isLimited: boolean  | undefined) {
        this['is_limited'] = isLimited;
    }
    public get isLimited(): boolean | undefined {
        return this['is_limited'];
    }
    public withSubmoduleLink(submoduleLink: string): LogTreeDto {
        this['submodule_link'] = submoduleLink;
        return this;
    }
    public set submoduleLink(submoduleLink: string  | undefined) {
        this['submodule_link'] = submoduleLink;
    }
    public get submoduleLink(): string | undefined {
        return this['submodule_link'];
    }
    public withMd5(md5: string): LogTreeDto {
        this['md5'] = md5;
        return this;
    }
    public withNickName(nickName: string): LogTreeDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): LogTreeDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): LogTreeDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}