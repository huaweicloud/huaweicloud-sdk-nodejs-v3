

export class OperateResultRequestInfo {
    private 'agent_id'?: string;
    private 'result_id'?: string;
    private 'event_type'?: number;
    private 'occur_time'?: number;
    private 'file_hash'?: string;
    private 'file_path'?: string;
    private 'file_attr'?: string;
    public constructor(agentId?: string, resultId?: string, eventType?: number, fileHash?: string, filePath?: string, fileAttr?: string) { 
        this['agent_id'] = agentId;
        this['result_id'] = resultId;
        this['event_type'] = eventType;
        this['file_hash'] = fileHash;
        this['file_path'] = filePath;
        this['file_attr'] = fileAttr;
    }
    public withAgentId(agentId: string): OperateResultRequestInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withResultId(resultId: string): OperateResultRequestInfo {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withEventType(eventType: number): OperateResultRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withOccurTime(occurTime: number): OperateResultRequestInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withFileHash(fileHash: string): OperateResultRequestInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFilePath(filePath: string): OperateResultRequestInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileAttr(fileAttr: string): OperateResultRequestInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
}