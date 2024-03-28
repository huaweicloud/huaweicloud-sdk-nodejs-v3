import { TableUserPrivilege } from './TableUserPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableUsersResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public privileges?: Array<TableUserPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListTableUsersResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListTableUsersResponse {
        this['message'] = message;
        return this;
    }
    public withPrivileges(privileges: Array<TableUserPrivilege>): ListTableUsersResponse {
        this['privileges'] = privileges;
        return this;
    }
}