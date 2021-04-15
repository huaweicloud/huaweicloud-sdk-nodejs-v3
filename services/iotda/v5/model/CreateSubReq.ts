import { Subject } from './Subject';


export class CreateSubReq {
    public subject: Subject;
    public callbackurl: string;
    private 'app_id'?: string | undefined;
    public channel: string;
    public constructor(subject?: any, callbackurl?: any, channel?: any) { 
        this['subject'] = subject;
        this['callbackurl'] = callbackurl;
        this['channel'] = channel;
    }
    public withSubject(subject: Subject): CreateSubReq {
        this['subject'] = subject;
        return this;
    }
    public withCallbackurl(callbackurl: string): CreateSubReq {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withAppId(appId: string): CreateSubReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withChannel(channel: string): CreateSubReq {
        this['channel'] = channel;
        return this;
    }
}