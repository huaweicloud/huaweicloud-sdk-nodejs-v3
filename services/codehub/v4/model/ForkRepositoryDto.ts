import { ForkRepositoryBaseDto } from './ForkRepositoryBaseDto';
import { ForkRepositoryBasicDto } from './ForkRepositoryBasicDto';
import { ForkRepositoryLeastDto } from './ForkRepositoryLeastDto';


export class ForkRepositoryDto {
    public id?: number;
    public name?: string;
    public archived?: boolean;
    private 'product_id'?: string;
    private 'product_name'?: string;
    private 'path_with_namespace'?: string;
    public namespace?: string;
    public path?: string;
    private 'develop_mode'?: string;
    public visibility?: string;
    public security?: string;
    private 'star_count'?: number;
    private 'forks_count'?: number;
    private 'open_merge_requests_count'?: number;
    public starred?: boolean;
    private 'name_with_namespace'?: string;
    private 'last_activity_at'?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: number): ForkRepositoryDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ForkRepositoryDto {
        this['name'] = name;
        return this;
    }
    public withArchived(archived: boolean): ForkRepositoryDto {
        this['archived'] = archived;
        return this;
    }
    public withProductId(productId: string): ForkRepositoryDto {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): ForkRepositoryDto {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withPathWithNamespace(pathWithNamespace: string): ForkRepositoryDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withNamespace(namespace: string): ForkRepositoryDto {
        this['namespace'] = namespace;
        return this;
    }
    public withPath(path: string): ForkRepositoryDto {
        this['path'] = path;
        return this;
    }
    public withDevelopMode(developMode: string): ForkRepositoryDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withVisibility(visibility: string): ForkRepositoryDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurity(security: string): ForkRepositoryDto {
        this['security'] = security;
        return this;
    }
    public withStarCount(starCount: number): ForkRepositoryDto {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withForksCount(forksCount: number): ForkRepositoryDto {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): ForkRepositoryDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withStarred(starred: boolean): ForkRepositoryDto {
        this['starred'] = starred;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): ForkRepositoryDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withLastActivityAt(lastActivityAt: string): ForkRepositoryDto {
        this['last_activity_at'] = lastActivityAt;
        return this;
    }
    public set lastActivityAt(lastActivityAt: string  | undefined) {
        this['last_activity_at'] = lastActivityAt;
    }
    public get lastActivityAt(): string | undefined {
        return this['last_activity_at'];
    }
    public withCreatedAt(createdAt: string): ForkRepositoryDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}