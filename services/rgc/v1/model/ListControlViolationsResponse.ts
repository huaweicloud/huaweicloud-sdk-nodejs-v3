import { ControlViolation } from './ControlViolation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListControlViolationsResponse extends SdkResponse {
    private 'control_violations'?: Array<ControlViolation>;
    public constructor() { 
        super();
    }
    public withControlViolations(controlViolations: Array<ControlViolation>): ListControlViolationsResponse {
        this['control_violations'] = controlViolations;
        return this;
    }
    public set controlViolations(controlViolations: Array<ControlViolation>  | undefined) {
        this['control_violations'] = controlViolations;
    }
    public get controlViolations(): Array<ControlViolation> | undefined {
        return this['control_violations'];
    }
}