import { ImageGroup } from './ImageGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageGroupResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ImageGroup>;
    public pages?: number;
    public size?: number;
    public total?: number;
    private 'is_swr_enterprise'?: boolean;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListImageGroupResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ImageGroup>): ListImageGroupResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListImageGroupResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListImageGroupResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListImageGroupResponse {
        this['total'] = total;
        return this;
    }
    public withIsSwrEnterprise(isSwrEnterprise: boolean): ListImageGroupResponse {
        this['is_swr_enterprise'] = isSwrEnterprise;
        return this;
    }
    public set isSwrEnterprise(isSwrEnterprise: boolean  | undefined) {
        this['is_swr_enterprise'] = isSwrEnterprise;
    }
    public get isSwrEnterprise(): boolean | undefined {
        return this['is_swr_enterprise'];
    }
}