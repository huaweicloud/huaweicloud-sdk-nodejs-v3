import { GroupMyRoleDto } from './GroupMyRoleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferGroupResponse extends SdkResponse {
    public id?: number;
    private 'full_name'?: string;
    private 'full_path'?: string;
    private 'my_role'?: GroupMyRoleDto;
    public name?: string;
    private 'parent_id'?: number;
    private 'creator_id'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): TransferGroupResponse {
        this['id'] = id;
        return this;
    }
    public withFullName(fullName: string): TransferGroupResponse {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withFullPath(fullPath: string): TransferGroupResponse {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withMyRole(myRole: GroupMyRoleDto): TransferGroupResponse {
        this['my_role'] = myRole;
        return this;
    }
    public set myRole(myRole: GroupMyRoleDto  | undefined) {
        this['my_role'] = myRole;
    }
    public get myRole(): GroupMyRoleDto | undefined {
        return this['my_role'];
    }
    public withName(name: string): TransferGroupResponse {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: number): TransferGroupResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withCreatorId(creatorId: number): TransferGroupResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
}