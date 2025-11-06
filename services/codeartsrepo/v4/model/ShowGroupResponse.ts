import { GroupSumDto } from './GroupSumDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupResponse extends SdkResponse {
    private 'creator_id'?: number;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    public description?: string;
    private 'full_name'?: string;
    private 'ancestor_ids'?: Array<number>;
    private 'ancestor_names'?: Array<string>;
    public id?: number;
    private 'members_count'?: number;
    public name?: string;
    private 'repository_count'?: number;
    private 'star_count'?: number;
    public starred?: boolean;
    private 'subgroup_count'?: number;
    public visibility?: ShowGroupResponseVisibilityEnum | string;
    public sum?: GroupSumDto;
    public constructor() { 
        super();
    }
    public withCreatorId(creatorId: number): ShowGroupResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withProjectId(projectId: string): ShowGroupResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): ShowGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): ShowGroupResponse {
        this['description'] = description;
        return this;
    }
    public withFullName(fullName: string): ShowGroupResponse {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withAncestorIds(ancestorIds: Array<number>): ShowGroupResponse {
        this['ancestor_ids'] = ancestorIds;
        return this;
    }
    public set ancestorIds(ancestorIds: Array<number>  | undefined) {
        this['ancestor_ids'] = ancestorIds;
    }
    public get ancestorIds(): Array<number> | undefined {
        return this['ancestor_ids'];
    }
    public withAncestorNames(ancestorNames: Array<string>): ShowGroupResponse {
        this['ancestor_names'] = ancestorNames;
        return this;
    }
    public set ancestorNames(ancestorNames: Array<string>  | undefined) {
        this['ancestor_names'] = ancestorNames;
    }
    public get ancestorNames(): Array<string> | undefined {
        return this['ancestor_names'];
    }
    public withId(id: number): ShowGroupResponse {
        this['id'] = id;
        return this;
    }
    public withMembersCount(membersCount: number): ShowGroupResponse {
        this['members_count'] = membersCount;
        return this;
    }
    public set membersCount(membersCount: number  | undefined) {
        this['members_count'] = membersCount;
    }
    public get membersCount(): number | undefined {
        return this['members_count'];
    }
    public withName(name: string): ShowGroupResponse {
        this['name'] = name;
        return this;
    }
    public withRepositoryCount(repositoryCount: number): ShowGroupResponse {
        this['repository_count'] = repositoryCount;
        return this;
    }
    public set repositoryCount(repositoryCount: number  | undefined) {
        this['repository_count'] = repositoryCount;
    }
    public get repositoryCount(): number | undefined {
        return this['repository_count'];
    }
    public withStarCount(starCount: number): ShowGroupResponse {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withStarred(starred: boolean): ShowGroupResponse {
        this['starred'] = starred;
        return this;
    }
    public withSubgroupCount(subgroupCount: number): ShowGroupResponse {
        this['subgroup_count'] = subgroupCount;
        return this;
    }
    public set subgroupCount(subgroupCount: number  | undefined) {
        this['subgroup_count'] = subgroupCount;
    }
    public get subgroupCount(): number | undefined {
        return this['subgroup_count'];
    }
    public withVisibility(visibility: ShowGroupResponseVisibilityEnum | string): ShowGroupResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withSum(sum: GroupSumDto): ShowGroupResponse {
        this['sum'] = sum;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGroupResponseVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
