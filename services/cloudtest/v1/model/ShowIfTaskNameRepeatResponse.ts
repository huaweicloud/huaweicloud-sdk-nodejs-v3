import { AlarmTemplateInfo } from './AlarmTemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIfTaskNameRepeatResponse extends SdkResponse {
    public pageNo?: number;
    public pageSize?: number;
    public totalPage?: number;
    public totalSize?: number;
    public pageList?: Array<AlarmTemplateInfo>;
    public constructor() { 
        super();
    }
    public withPageNo(pageNo: number): ShowIfTaskNameRepeatResponse {
        this['pageNo'] = pageNo;
        return this;
    }
    public withPageSize(pageSize: number): ShowIfTaskNameRepeatResponse {
        this['pageSize'] = pageSize;
        return this;
    }
    public withTotalPage(totalPage: number): ShowIfTaskNameRepeatResponse {
        this['totalPage'] = totalPage;
        return this;
    }
    public withTotalSize(totalSize: number): ShowIfTaskNameRepeatResponse {
        this['totalSize'] = totalSize;
        return this;
    }
    public withPageList(pageList: Array<AlarmTemplateInfo>): ShowIfTaskNameRepeatResponse {
        this['pageList'] = pageList;
        return this;
    }
}