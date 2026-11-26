import { ApproverListApprovers } from './ApproverListApprovers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataServiceApproversResponse extends SdkResponse {
    private 'total_records'?: string;
    public size?: number;
    private 'total_pages'?: number;
    public approvers?: Array<ApproverListApprovers>;
    public constructor() { 
        super();
    }
    public withTotalRecords(totalRecords: string): ListDataServiceApproversResponse {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: string  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): string | undefined {
        return this['total_records'];
    }
    public withSize(size: number): ListDataServiceApproversResponse {
        this['size'] = size;
        return this;
    }
    public withTotalPages(totalPages: number): ListDataServiceApproversResponse {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
    public withApprovers(approvers: Array<ApproverListApprovers>): ListDataServiceApproversResponse {
        this['approvers'] = approvers;
        return this;
    }
}