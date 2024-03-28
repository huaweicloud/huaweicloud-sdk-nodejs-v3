import { UpdateGlobalVariableRequestBody } from './UpdateGlobalVariableRequestBody';


export class UpdateGlobalVariableRequest {
    private 'var_name'?: string;
    public body?: UpdateGlobalVariableRequestBody;
    public constructor(varName?: string) { 
        this['var_name'] = varName;
    }
    public withVarName(varName: string): UpdateGlobalVariableRequest {
        this['var_name'] = varName;
        return this;
    }
    public set varName(varName: string  | undefined) {
        this['var_name'] = varName;
    }
    public get varName(): string | undefined {
        return this['var_name'];
    }
    public withBody(body: UpdateGlobalVariableRequestBody): UpdateGlobalVariableRequest {
        this['body'] = body;
        return this;
    }
}