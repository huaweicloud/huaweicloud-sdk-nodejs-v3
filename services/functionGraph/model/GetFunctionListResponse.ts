import { SdkResponse } from "../../../core/SdkResponse";
import { FunctionInfo } from "./FunctionInfo"

export class GetFunctionListResponse extends SdkResponse {
    public functions?: Array<FunctionInfo>;
    public constructor() {
        super();
    }
    public withFunctions(functions: Array<FunctionInfo>): GetFunctionListResponse {
        this['functions'] = functions;
        return this;
    }
}