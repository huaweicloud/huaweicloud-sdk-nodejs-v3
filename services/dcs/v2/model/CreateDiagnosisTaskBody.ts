

export class CreateDiagnosisTaskBody {
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'node_ip_list'?: Array<string>;
    public constructor(beginTime?: string, endTime?: string) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withBeginTime(beginTime: string): CreateDiagnosisTaskBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): CreateDiagnosisTaskBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withNodeIpList(nodeIpList: Array<string>): CreateDiagnosisTaskBody {
        this['node_ip_list'] = nodeIpList;
        return this;
    }
    public set nodeIpList(nodeIpList: Array<string>  | undefined) {
        this['node_ip_list'] = nodeIpList;
    }
    public get nodeIpList(): Array<string> | undefined {
        return this['node_ip_list'];
    }
}