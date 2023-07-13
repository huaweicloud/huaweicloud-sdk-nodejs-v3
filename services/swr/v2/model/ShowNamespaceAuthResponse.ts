import { UserAuth } from './UserAuth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNamespaceAuthResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    private 'creator_name'?: string | undefined;
    private 'self_auth'?: UserAuth | undefined;
    private 'others_auths'?: Array<UserAuth> | undefined;
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
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withSelfAuth(selfAuth: UserAuth): ShowNamespaceAuthResponse {
        this['self_auth'] = selfAuth;
        return this;
    }
    public set selfAuth(selfAuth: UserAuth | undefined) {
        this['self_auth'] = selfAuth;
    }
    public get selfAuth() {
        return this['self_auth'];
    }
    public withOthersAuths(othersAuths: Array<UserAuth>): ShowNamespaceAuthResponse {
        this['others_auths'] = othersAuths;
        return this;
    }
    public set othersAuths(othersAuths: Array<UserAuth> | undefined) {
        this['others_auths'] = othersAuths;
    }
    public get othersAuths() {
        return this['others_auths'];
    }
}