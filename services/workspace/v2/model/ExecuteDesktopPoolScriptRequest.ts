import { ExecuteDesktopPoolScriptsReq } from './ExecuteDesktopPoolScriptsReq';


export class ExecuteDesktopPoolScriptRequest {
    private 'pool_id'?: string;
    public body?: ExecuteDesktopPoolScriptsReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ExecuteDesktopPoolScriptRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: ExecuteDesktopPoolScriptsReq): ExecuteDesktopPoolScriptRequest {
        this['body'] = body;
        return this;
    }
}