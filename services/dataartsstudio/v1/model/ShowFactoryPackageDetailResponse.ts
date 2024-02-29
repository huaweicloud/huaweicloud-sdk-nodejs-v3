import { ShowPackageDetailRespReleasePackage } from './ShowPackageDetailRespReleasePackage';
import { ShowPackageDetailRespTaskDetails } from './ShowPackageDetailRespTaskDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactoryPackageDetailResponse extends SdkResponse {
    private 'release_package'?: ShowPackageDetailRespReleasePackage;
    private 'task_details'?: Array<ShowPackageDetailRespTaskDetails>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withReleasePackage(releasePackage: ShowPackageDetailRespReleasePackage): ShowFactoryPackageDetailResponse {
        this['release_package'] = releasePackage;
        return this;
    }
    public set releasePackage(releasePackage: ShowPackageDetailRespReleasePackage  | undefined) {
        this['release_package'] = releasePackage;
    }
    public get releasePackage(): ShowPackageDetailRespReleasePackage | undefined {
        return this['release_package'];
    }
    public withTaskDetails(taskDetails: Array<ShowPackageDetailRespTaskDetails>): ShowFactoryPackageDetailResponse {
        this['task_details'] = taskDetails;
        return this;
    }
    public set taskDetails(taskDetails: Array<ShowPackageDetailRespTaskDetails>  | undefined) {
        this['task_details'] = taskDetails;
    }
    public get taskDetails(): Array<ShowPackageDetailRespTaskDetails> | undefined {
        return this['task_details'];
    }
    public withXRequestId(xRequestId: string): ShowFactoryPackageDetailResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}