import { GetUsersListDetailResponses } from './GetUsersListDetailResponses';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    public users?: Array<GetUsersListDetailResponses>;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'total_record'?: number;
    private 'total_page'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<GetUsersListDetailResponses>): ListUsersResponse {
        this['users'] = users;
        return this;
    }
    public withPageNo(pageNo: number): ListUsersResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListUsersResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotalRecord(totalRecord: number): ListUsersResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withTotalPage(totalPage: number): ListUsersResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
}