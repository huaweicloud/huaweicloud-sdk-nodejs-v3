import { UserRefPermissionBasicDto } from './UserRefPermissionBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserRefPermissionResponse extends SdkResponse {
    public read?: UserRefPermissionBasicDto;
    public review?: UserRefPermissionBasicDto;
    public approval?: UserRefPermissionBasicDto;
    private 'create_change'?: UserRefPermissionBasicDto;
    public merge?: UserRefPermissionBasicDto;
    private 'create_delete'?: UserRefPermissionBasicDto;
    public push?: UserRefPermissionBasicDto;
    public constructor() { 
        super();
    }
    public withRead(read: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['read'] = read;
        return this;
    }
    public withReview(review: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['review'] = review;
        return this;
    }
    public withApproval(approval: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['approval'] = approval;
        return this;
    }
    public withCreateChange(createChange: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['create_change'] = createChange;
        return this;
    }
    public set createChange(createChange: UserRefPermissionBasicDto  | undefined) {
        this['create_change'] = createChange;
    }
    public get createChange(): UserRefPermissionBasicDto | undefined {
        return this['create_change'];
    }
    public withMerge(merge: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['merge'] = merge;
        return this;
    }
    public withCreateDelete(createDelete: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['create_delete'] = createDelete;
        return this;
    }
    public set createDelete(createDelete: UserRefPermissionBasicDto  | undefined) {
        this['create_delete'] = createDelete;
    }
    public get createDelete(): UserRefPermissionBasicDto | undefined {
        return this['create_delete'];
    }
    public withPush(push: UserRefPermissionBasicDto): ShowUserRefPermissionResponse {
        this['push'] = push;
        return this;
    }
}