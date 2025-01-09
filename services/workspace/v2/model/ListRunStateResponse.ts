
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRunStateResponse extends SdkResponse {
    private 'stop_num'?: number;
    private 'active_num'?: number;
    private 'error_num'?: number;
    private 'hibernated_num'?: number;
    public constructor() { 
        super();
    }
    public withStopNum(stopNum: number): ListRunStateResponse {
        this['stop_num'] = stopNum;
        return this;
    }
    public set stopNum(stopNum: number  | undefined) {
        this['stop_num'] = stopNum;
    }
    public get stopNum(): number | undefined {
        return this['stop_num'];
    }
    public withActiveNum(activeNum: number): ListRunStateResponse {
        this['active_num'] = activeNum;
        return this;
    }
    public set activeNum(activeNum: number  | undefined) {
        this['active_num'] = activeNum;
    }
    public get activeNum(): number | undefined {
        return this['active_num'];
    }
    public withErrorNum(errorNum: number): ListRunStateResponse {
        this['error_num'] = errorNum;
        return this;
    }
    public set errorNum(errorNum: number  | undefined) {
        this['error_num'] = errorNum;
    }
    public get errorNum(): number | undefined {
        return this['error_num'];
    }
    public withHibernatedNum(hibernatedNum: number): ListRunStateResponse {
        this['hibernated_num'] = hibernatedNum;
        return this;
    }
    public set hibernatedNum(hibernatedNum: number  | undefined) {
        this['hibernated_num'] = hibernatedNum;
    }
    public get hibernatedNum(): number | undefined {
        return this['hibernated_num'];
    }
}