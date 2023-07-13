import { KeystoneShowUserResult } from './KeystoneShowUserResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowUserResponse extends SdkResponse {
    public user?: KeystoneShowUserResult;
    public constructor() { 
        super();
    }
    public withUser(user: KeystoneShowUserResult): KeystoneShowUserResponse {
        this['user'] = user;
        return this;
    }
}