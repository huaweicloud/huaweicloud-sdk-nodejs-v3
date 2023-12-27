import { DigitalHumanVideo } from './DigitalHumanVideo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDigitalHumanVideoResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<DigitalHumanVideo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDigitalHumanVideoResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<DigitalHumanVideo>): ListDigitalHumanVideoResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDigitalHumanVideoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}