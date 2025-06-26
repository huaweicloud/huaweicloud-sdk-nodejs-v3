import { ControlOperation } from './ControlOperation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowControlOperateResponse extends SdkResponse {
    private 'control_operation'?: ControlOperation;
    public constructor() { 
        super();
    }
    public withControlOperation(controlOperation: ControlOperation): ShowControlOperateResponse {
        this['control_operation'] = controlOperation;
        return this;
    }
    public set controlOperation(controlOperation: ControlOperation  | undefined) {
        this['control_operation'] = controlOperation;
    }
    public get controlOperation(): ControlOperation | undefined {
        return this['control_operation'];
    }
}