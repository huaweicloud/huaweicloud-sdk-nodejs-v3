import { ResultDetailResponseInfo } from './ResultDetailResponseInfo';
import { ResultFileResponseInfo } from './ResultFileResponseInfo';
import { ResultResourceResponseInfo } from './ResultResourceResponseInfo';


export class AntiVirusResultResponseInfo {
    private 'result_id'?: string;
    private 'malware_type'?: string;
    private 'malware_name'?: string;
    public severity?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'file_info'?: ResultFileResponseInfo;
    private 'resource_info'?: ResultResourceResponseInfo;
    private 'event_type'?: number;
    private 'occur_time'?: number;
    private 'handle_status'?: string;
    private 'handle_method'?: string;
    public memo?: string;
    private 'operate_accept_list'?: Array<string>;
    private 'operate_detail_list'?: Array<ResultDetailResponseInfo>;
    private 'isolate_tag'?: string;
    public constructor() { 
    }
    public withResultId(resultId: string): AntiVirusResultResponseInfo {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withMalwareType(malwareType: string): AntiVirusResultResponseInfo {
        this['malware_type'] = malwareType;
        return this;
    }
    public set malwareType(malwareType: string  | undefined) {
        this['malware_type'] = malwareType;
    }
    public get malwareType(): string | undefined {
        return this['malware_type'];
    }
    public withMalwareName(malwareName: string): AntiVirusResultResponseInfo {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withSeverity(severity: string): AntiVirusResultResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withTaskId(taskId: string): AntiVirusResultResponseInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): AntiVirusResultResponseInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withFileInfo(fileInfo: ResultFileResponseInfo): AntiVirusResultResponseInfo {
        this['file_info'] = fileInfo;
        return this;
    }
    public set fileInfo(fileInfo: ResultFileResponseInfo  | undefined) {
        this['file_info'] = fileInfo;
    }
    public get fileInfo(): ResultFileResponseInfo | undefined {
        return this['file_info'];
    }
    public withResourceInfo(resourceInfo: ResultResourceResponseInfo): AntiVirusResultResponseInfo {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: ResultResourceResponseInfo  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): ResultResourceResponseInfo | undefined {
        return this['resource_info'];
    }
    public withEventType(eventType: number): AntiVirusResultResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withOccurTime(occurTime: number): AntiVirusResultResponseInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleStatus(handleStatus: string): AntiVirusResultResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHandleMethod(handleMethod: string): AntiVirusResultResponseInfo {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withMemo(memo: string): AntiVirusResultResponseInfo {
        this['memo'] = memo;
        return this;
    }
    public withOperateAcceptList(operateAcceptList: Array<string>): AntiVirusResultResponseInfo {
        this['operate_accept_list'] = operateAcceptList;
        return this;
    }
    public set operateAcceptList(operateAcceptList: Array<string>  | undefined) {
        this['operate_accept_list'] = operateAcceptList;
    }
    public get operateAcceptList(): Array<string> | undefined {
        return this['operate_accept_list'];
    }
    public withOperateDetailList(operateDetailList: Array<ResultDetailResponseInfo>): AntiVirusResultResponseInfo {
        this['operate_detail_list'] = operateDetailList;
        return this;
    }
    public set operateDetailList(operateDetailList: Array<ResultDetailResponseInfo>  | undefined) {
        this['operate_detail_list'] = operateDetailList;
    }
    public get operateDetailList(): Array<ResultDetailResponseInfo> | undefined {
        return this['operate_detail_list'];
    }
    public withIsolateTag(isolateTag: string): AntiVirusResultResponseInfo {
        this['isolate_tag'] = isolateTag;
        return this;
    }
    public set isolateTag(isolateTag: string  | undefined) {
        this['isolate_tag'] = isolateTag;
    }
    public get isolateTag(): string | undefined {
        return this['isolate_tag'];
    }
}