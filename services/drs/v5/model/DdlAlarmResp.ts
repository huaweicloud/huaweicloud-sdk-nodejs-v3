

export class DdlAlarmResp {
    public seqno?: number;
    public checkpoint?: string;
    public status?: number;
    private 'ddl_timestamp'?: number;
    private 'ddl_text'?: string;
    private 'exe_result'?: boolean;
    private 'record_time'?: number;
    private 'clean_time'?: number;
    public constructor(seqno?: number, checkpoint?: string, status?: number, ddlTimestamp?: number, ddlText?: string, exeResult?: boolean, recordTime?: number) { 
        this['seqno'] = seqno;
        this['checkpoint'] = checkpoint;
        this['status'] = status;
        this['ddl_timestamp'] = ddlTimestamp;
        this['ddl_text'] = ddlText;
        this['exe_result'] = exeResult;
        this['record_time'] = recordTime;
    }
    public withSeqno(seqno: number): DdlAlarmResp {
        this['seqno'] = seqno;
        return this;
    }
    public withCheckpoint(checkpoint: string): DdlAlarmResp {
        this['checkpoint'] = checkpoint;
        return this;
    }
    public withStatus(status: number): DdlAlarmResp {
        this['status'] = status;
        return this;
    }
    public withDdlTimestamp(ddlTimestamp: number): DdlAlarmResp {
        this['ddl_timestamp'] = ddlTimestamp;
        return this;
    }
    public set ddlTimestamp(ddlTimestamp: number  | undefined) {
        this['ddl_timestamp'] = ddlTimestamp;
    }
    public get ddlTimestamp(): number | undefined {
        return this['ddl_timestamp'];
    }
    public withDdlText(ddlText: string): DdlAlarmResp {
        this['ddl_text'] = ddlText;
        return this;
    }
    public set ddlText(ddlText: string  | undefined) {
        this['ddl_text'] = ddlText;
    }
    public get ddlText(): string | undefined {
        return this['ddl_text'];
    }
    public withExeResult(exeResult: boolean): DdlAlarmResp {
        this['exe_result'] = exeResult;
        return this;
    }
    public set exeResult(exeResult: boolean  | undefined) {
        this['exe_result'] = exeResult;
    }
    public get exeResult(): boolean | undefined {
        return this['exe_result'];
    }
    public withRecordTime(recordTime: number): DdlAlarmResp {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withCleanTime(cleanTime: number): DdlAlarmResp {
        this['clean_time'] = cleanTime;
        return this;
    }
    public set cleanTime(cleanTime: number  | undefined) {
        this['clean_time'] = cleanTime;
    }
    public get cleanTime(): number | undefined {
        return this['clean_time'];
    }
}