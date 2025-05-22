
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadIssueImgResponse extends SdkResponse {
    private 'img_id'?: string;
    private 'img_url'?: string;
    public constructor() { 
        super();
    }
    public withImgId(imgId: string): UploadIssueImgResponse {
        this['img_id'] = imgId;
        return this;
    }
    public set imgId(imgId: string  | undefined) {
        this['img_id'] = imgId;
    }
    public get imgId(): string | undefined {
        return this['img_id'];
    }
    public withImgUrl(imgUrl: string): UploadIssueImgResponse {
        this['img_url'] = imgUrl;
        return this;
    }
    public set imgUrl(imgUrl: string  | undefined) {
        this['img_url'] = imgUrl;
    }
    public get imgUrl(): string | undefined {
        return this['img_url'];
    }
}