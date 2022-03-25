import { UserAuth } from './UserAuth';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserRepositoryAuthResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    private 'self_auth'?: UserAuth | undefined;
    private 'others_auths'?: Array<UserAuth> | undefined;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowUserRepositoryAuthResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowUserRepositoryAuthResponse {
        this['name'] = name;
        return this;
    }
    public withSelfAuth(selfAuth: UserAuth): ShowUserRepositoryAuthResponse {
        this['self_auth'] = selfAuth;
        return this;
    }
    public set selfAuth(selfAuth: UserAuth | undefined) {
        this['self_auth'] = selfAuth;
    }
    public get selfAuth() {
        return this['self_auth'];
    }
    public withOthersAuths(othersAuths: Array<UserAuth>): ShowUserRepositoryAuthResponse {
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