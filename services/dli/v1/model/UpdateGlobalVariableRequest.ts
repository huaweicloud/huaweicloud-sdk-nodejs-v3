import { UpdateGlobalValueReq } from './UpdateGlobalValueReq';


export class UpdateGlobalVariableRequest {
    private 'var_name'?: string;
    public body?: UpdateGlobalValueReq;
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
    public withBody(body: UpdateGlobalValueReq): UpdateGlobalVariableRequest {
        this['body'] = body;
        return this;
    }
}