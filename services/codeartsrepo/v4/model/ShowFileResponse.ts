import { RepositoryCommitDto } from './RepositoryCommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileResponse extends SdkResponse {
    public name?: string;
    public path?: string;
    public size?: number;
    public encoding?: string;
    public ref?: string;
    private 'blob_id'?: string;
    private 'file_type'?: string;
    public commit?: RepositoryCommitDto;
    public content?: string;
    private 'is_limited'?: boolean;
    private 'content_sha256'?: string;
    private 'last_commit_id'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowFileResponse {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): ShowFileResponse {
        this['path'] = path;
        return this;
    }
    public withSize(size: number): ShowFileResponse {
        this['size'] = size;
        return this;
    }
    public withEncoding(encoding: string): ShowFileResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withRef(ref: string): ShowFileResponse {
        this['ref'] = ref;
        return this;
    }
    public withBlobId(blobId: string): ShowFileResponse {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withFileType(fileType: string): ShowFileResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withCommit(commit: RepositoryCommitDto): ShowFileResponse {
        this['commit'] = commit;
        return this;
    }
    public withContent(content: string): ShowFileResponse {
        this['content'] = content;
        return this;
    }
    public withIsLimited(isLimited: boolean): ShowFileResponse {
        this['is_limited'] = isLimited;
        return this;
    }
    public set isLimited(isLimited: boolean  | undefined) {
        this['is_limited'] = isLimited;
    }
    public get isLimited(): boolean | undefined {
        return this['is_limited'];
    }
    public withContentSha256(contentSha256: string): ShowFileResponse {
        this['content_sha256'] = contentSha256;
        return this;
    }
    public set contentSha256(contentSha256: string  | undefined) {
        this['content_sha256'] = contentSha256;
    }
    public get contentSha256(): string | undefined {
        return this['content_sha256'];
    }
    public withLastCommitId(lastCommitId: string): ShowFileResponse {
        this['last_commit_id'] = lastCommitId;
        return this;
    }
    public set lastCommitId(lastCommitId: string  | undefined) {
        this['last_commit_id'] = lastCommitId;
    }
    public get lastCommitId(): string | undefined {
        return this['last_commit_id'];
    }
    public withNickName(nickName: string): ShowFileResponse {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): ShowFileResponse {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): ShowFileResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withXTotal(xTotal: string): ShowFileResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}