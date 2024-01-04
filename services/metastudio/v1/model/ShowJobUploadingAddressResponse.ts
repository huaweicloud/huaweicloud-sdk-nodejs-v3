import { ShowJobUploadingAddressRspPackageUrl } from './ShowJobUploadingAddressRspPackageUrl';
import { ShowJobUploadingAddressRspSegmentUrl } from './ShowJobUploadingAddressRspSegmentUrl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobUploadingAddressResponse extends SdkResponse {
    private 'segment_url'?: ShowJobUploadingAddressRspSegmentUrl;
    private 'package_url'?: ShowJobUploadingAddressRspPackageUrl;
    private 'authorization_letter_uploading_url'?: string;
    public constructor() { 
        super();
    }
    public withSegmentUrl(segmentUrl: ShowJobUploadingAddressRspSegmentUrl): ShowJobUploadingAddressResponse {
        this['segment_url'] = segmentUrl;
        return this;
    }
    public set segmentUrl(segmentUrl: ShowJobUploadingAddressRspSegmentUrl  | undefined) {
        this['segment_url'] = segmentUrl;
    }
    public get segmentUrl(): ShowJobUploadingAddressRspSegmentUrl | undefined {
        return this['segment_url'];
    }
    public withPackageUrl(packageUrl: ShowJobUploadingAddressRspPackageUrl): ShowJobUploadingAddressResponse {
        this['package_url'] = packageUrl;
        return this;
    }
    public set packageUrl(packageUrl: ShowJobUploadingAddressRspPackageUrl  | undefined) {
        this['package_url'] = packageUrl;
    }
    public get packageUrl(): ShowJobUploadingAddressRspPackageUrl | undefined {
        return this['package_url'];
    }
    public withAuthorizationLetterUploadingUrl(authorizationLetterUploadingUrl: string): ShowJobUploadingAddressResponse {
        this['authorization_letter_uploading_url'] = authorizationLetterUploadingUrl;
        return this;
    }
    public set authorizationLetterUploadingUrl(authorizationLetterUploadingUrl: string  | undefined) {
        this['authorization_letter_uploading_url'] = authorizationLetterUploadingUrl;
    }
    public get authorizationLetterUploadingUrl(): string | undefined {
        return this['authorization_letter_uploading_url'];
    }
}