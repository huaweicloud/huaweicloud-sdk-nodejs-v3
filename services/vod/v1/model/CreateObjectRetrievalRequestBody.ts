import { ObsInfo } from './ObsInfo';


export class CreateObjectRetrievalRequestBody {
    private 'obs_info'?: ObsInfo;
    public days?: number;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(obsInfo?: ObsInfo) { 
        this['obs_info'] = obsInfo;
    }
    public withObsInfo(obsInfo: ObsInfo): CreateObjectRetrievalRequestBody {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withDays(days: number): CreateObjectRetrievalRequestBody {
        this['days'] = days;
        return this;
    }
    public withCallbackUrl(callbackUrl: string): CreateObjectRetrievalRequestBody {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): CreateObjectRetrievalRequestBody {
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