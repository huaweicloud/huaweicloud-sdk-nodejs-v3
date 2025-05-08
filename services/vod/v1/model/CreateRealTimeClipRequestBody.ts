import { AdditionalObjectProcessReq } from './AdditionalObjectProcessReq';


export class CreateRealTimeClipRequestBody {
    private 'timeshift_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'trans_template_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'is_persistence'?: number;
    private 'output_bucket'?: string;
    private 'output_object'?: string;
    private 'media_process_task'?: AdditionalObjectProcessReq;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(stream?: string, startTime?: string, endTime?: string) { 
        this['stream'] = stream;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withTimeshiftDomain(timeshiftDomain: string): CreateRealTimeClipRequestBody {
        this['timeshift_domain'] = timeshiftDomain;
        return this;
    }
    public set timeshiftDomain(timeshiftDomain: string  | undefined) {
        this['timeshift_domain'] = timeshiftDomain;
    }
    public get timeshiftDomain(): string | undefined {
        return this['timeshift_domain'];
    }
    public withApp(app: string): CreateRealTimeClipRequestBody {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): CreateRealTimeClipRequestBody {
        this['stream'] = stream;
        return this;
    }
    public withTransTemplateName(transTemplateName: string): CreateRealTimeClipRequestBody {
        this['trans_template_name'] = transTemplateName;
        return this;
    }
    public set transTemplateName(transTemplateName: string  | undefined) {
        this['trans_template_name'] = transTemplateName;
    }
    public get transTemplateName(): string | undefined {
        return this['trans_template_name'];
    }
    public withStartTime(startTime: string): CreateRealTimeClipRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CreateRealTimeClipRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withIsPersistence(isPersistence: number): CreateRealTimeClipRequestBody {
        this['is_persistence'] = isPersistence;
        return this;
    }
    public set isPersistence(isPersistence: number  | undefined) {
        this['is_persistence'] = isPersistence;
    }
    public get isPersistence(): number | undefined {
        return this['is_persistence'];
    }
    public withOutputBucket(outputBucket: string): CreateRealTimeClipRequestBody {
        this['output_bucket'] = outputBucket;
        return this;
    }
    public set outputBucket(outputBucket: string  | undefined) {
        this['output_bucket'] = outputBucket;
    }
    public get outputBucket(): string | undefined {
        return this['output_bucket'];
    }
    public withOutputObject(outputObject: string): CreateRealTimeClipRequestBody {
        this['output_object'] = outputObject;
        return this;
    }
    public set outputObject(outputObject: string  | undefined) {
        this['output_object'] = outputObject;
    }
    public get outputObject(): string | undefined {
        return this['output_object'];
    }
    public withMediaProcessTask(mediaProcessTask: AdditionalObjectProcessReq): CreateRealTimeClipRequestBody {
        this['media_process_task'] = mediaProcessTask;
        return this;
    }
    public set mediaProcessTask(mediaProcessTask: AdditionalObjectProcessReq  | undefined) {
        this['media_process_task'] = mediaProcessTask;
    }
    public get mediaProcessTask(): AdditionalObjectProcessReq | undefined {
        return this['media_process_task'];
    }
    public withCallbackUrl(callbackUrl: string): CreateRealTimeClipRequestBody {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): CreateRealTimeClipRequestBody {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
}