import { SaveMonitorItemParam } from './SaveMonitorItemParam';


export class SaveMonitorItemConfigRequest {
    private 'x-business-id'?: number;
    public body?: SaveMonitorItemParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SaveMonitorItemConfigRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: SaveMonitorItemParam): SaveMonitorItemConfigRequest {
        this['body'] = body;
        return this;
    }
}