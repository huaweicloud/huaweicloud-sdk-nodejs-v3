import { DigitalHumanBusinessCardJobInfo } from './DigitalHumanBusinessCardJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDigitalHumanBusinessCardResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<DigitalHumanBusinessCardJobInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDigitalHumanBusinessCardResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<DigitalHumanBusinessCardJobInfo>): ListDigitalHumanBusinessCardResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDigitalHumanBusinessCardResponse {
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