import { RelationSimpleInfo } from './RelationSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationFileResponse extends SdkResponse {
    public total?: number;
    private 'current_page'?: number;
    private 'file_list'?: Array<RelationSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRelationFileResponse {
        this['total'] = total;
        return this;
    }
    public withCurrentPage(currentPage: number): ListRelationFileResponse {
        this['current_page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current_page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current_page'];
    }
    public withFileList(fileList: Array<RelationSimpleInfo>): ListRelationFileResponse {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<RelationSimpleInfo>  | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList(): Array<RelationSimpleInfo> | undefined {
        return this['file_list'];
    }
}