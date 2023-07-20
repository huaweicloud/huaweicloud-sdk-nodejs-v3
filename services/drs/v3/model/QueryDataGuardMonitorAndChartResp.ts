import { QueryDataGuardMonitorResponse } from './QueryDataGuardMonitorResponse';


export class QueryDataGuardMonitorAndChartResp {
    public id?: string;
    private 'data_guard_minitor'?: QueryDataGuardMonitorResponse;
    public constructor(id?: string, dataGuardMinitor?: QueryDataGuardMonitorResponse) { 
        this['id'] = id;
        this['data_guard_minitor'] = dataGuardMinitor;
    }
    public withId(id: string): QueryDataGuardMonitorAndChartResp {
        this['id'] = id;
        return this;
    }
    public withDataGuardMinitor(dataGuardMinitor: QueryDataGuardMonitorResponse): QueryDataGuardMonitorAndChartResp {
        this['data_guard_minitor'] = dataGuardMinitor;
        return this;
    }
    public set dataGuardMinitor(dataGuardMinitor: QueryDataGuardMonitorResponse  | undefined) {
        this['data_guard_minitor'] = dataGuardMinitor;
    }
    public get dataGuardMinitor(): QueryDataGuardMonitorResponse | undefined {
        return this['data_guard_minitor'];
    }
}