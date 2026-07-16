
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlgorithmVersionToGalleryResponse extends SdkResponse {
    private 'content_id'?: string;
    private 'version_id'?: string;
    private 'version_num'?: string;
    private 'content_uri'?: string;
    public constructor() { 
        super();
    }
    public withContentId(contentId: string): CreateAlgorithmVersionToGalleryResponse {
        this['content_id'] = contentId;
        return this;
    }
    public set contentId(contentId: string  | undefined) {
        this['content_id'] = contentId;
    }
    public get contentId(): string | undefined {
        return this['content_id'];
    }
    public withVersionId(versionId: string): CreateAlgorithmVersionToGalleryResponse {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionNum(versionNum: string): CreateAlgorithmVersionToGalleryResponse {
        this['version_num'] = versionNum;
        return this;
    }
    public set versionNum(versionNum: string  | undefined) {
        this['version_num'] = versionNum;
    }
    public get versionNum(): string | undefined {
        return this['version_num'];
    }
    public withContentUri(contentUri: string): CreateAlgorithmVersionToGalleryResponse {
        this['content_uri'] = contentUri;
        return this;
    }
    public set contentUri(contentUri: string  | undefined) {
        this['content_uri'] = contentUri;
    }
    public get contentUri(): string | undefined {
        return this['content_uri'];
    }
}