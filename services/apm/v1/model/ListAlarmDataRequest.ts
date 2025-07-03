import { AlarmDataListRequest } from './AlarmDataListRequest';


export class ListAlarmDataRequest {
    private 'x-business-id'?: number;
    public body?: AlarmDataListRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListAlarmDataRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AlarmDataListRequest): ListAlarmDataRequest {
        this['body'] = body;
        return this;
    }
}