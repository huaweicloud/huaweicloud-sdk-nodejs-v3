import { AlarmNotifyListRequest } from './AlarmNotifyListRequest';


export class ListAlarmNotifyRequest {
    private 'x-business-id'?: number;
    public body?: AlarmNotifyListRequest;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ListAlarmNotifyRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AlarmNotifyListRequest): ListAlarmNotifyRequest {
        this['body'] = body;
        return this;
    }
}