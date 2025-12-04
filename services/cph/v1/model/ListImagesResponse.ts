import { ListImagesView } from './ListImagesView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    private 'image_infos'?: Array<ListImagesView>;
    public total?: number;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withImageInfos(imageInfos: Array<ListImagesView>): ListImagesResponse {
        this['image_infos'] = imageInfos;
        return this;
    }
    public set imageInfos(imageInfos: Array<ListImagesView>  | undefined) {
        this['image_infos'] = imageInfos;
    }
    public get imageInfos(): Array<ListImagesView> | undefined {
        return this['image_infos'];
    }
    public withTotal(total: number): ListImagesResponse {
        this['total'] = total;
        return this;
    }
    public withRequestId(requestId: string): ListImagesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}