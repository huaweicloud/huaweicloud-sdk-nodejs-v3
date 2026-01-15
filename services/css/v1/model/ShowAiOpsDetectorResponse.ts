import { AiOpsDetector } from './AiOpsDetector';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiOpsDetectorResponse extends SdkResponse {
    private 'full_detection'?: Array<AiOpsDetector>;
    private 'unavailability_detection'?: Array<AiOpsDetector>;
    public constructor() { 
        super();
    }
    public withFullDetection(fullDetection: Array<AiOpsDetector>): ShowAiOpsDetectorResponse {
        this['full_detection'] = fullDetection;
        return this;
    }
    public set fullDetection(fullDetection: Array<AiOpsDetector>  | undefined) {
        this['full_detection'] = fullDetection;
    }
    public get fullDetection(): Array<AiOpsDetector> | undefined {
        return this['full_detection'];
    }
    public withUnavailabilityDetection(unavailabilityDetection: Array<AiOpsDetector>): ShowAiOpsDetectorResponse {
        this['unavailability_detection'] = unavailabilityDetection;
        return this;
    }
    public set unavailabilityDetection(unavailabilityDetection: Array<AiOpsDetector>  | undefined) {
        this['unavailability_detection'] = unavailabilityDetection;
    }
    public get unavailabilityDetection(): Array<AiOpsDetector> | undefined {
        return this['unavailability_detection'];
    }
}