import { UserAuth } from './UserAuth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNamespaceAuthResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    private 'creator_name'?: string;
    private 'self_auth'?: UserAuth;
    private 'others_auths'?: Array<UserAuth>;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowNamespaceAuthResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowNamespaceAuthResponse {
        this['name'] = name;
        return this;
    }
    public withCreatorName(creatorName: string): ShowNamespaceAuthResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withSelfAuth(selfAuth: UserAuth): ShowNamespaceAuthResponse {
        this['self_auth'] = selfAuth;
        return this;
    }
    public set selfAuth(selfAuth: UserAuth  | undefined) {
        this['self_auth'] = selfAuth;
    }
    public get selfAuth(): UserAuth | undefined {
        return this['self_auth'];
    }
    public withOthersAuths(othersAuths: Array<UserAuth>): ShowNamespaceAuthResponse {
        this['others_auths'] = othersAuths;
        return this;
    }
    public set othersAuths(othersAuths: Array<UserAuth>  | undefined) {
        this['others_auths'] = othersAuths;
    }
    public get othersAuths(): Array<UserAuth> | undefined {
        return this['others_auths'];
    }
}