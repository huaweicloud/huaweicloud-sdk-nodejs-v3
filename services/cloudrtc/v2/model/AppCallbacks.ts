import { AppCallbackUrl } from './AppCallbackUrl';


export class AppCallbacks {
    private 'push_callback'?: AppCallbackUrl;
    private 'record_callback'?: AppCallbackUrl;
    public constructor() { 
    }
    public withPushCallback(pushCallback: AppCallbackUrl): AppCallbacks {
        this['push_callback'] = pushCallback;
        return this;
    }
    public set pushCallback(pushCallback: AppCallbackUrl  | undefined) {
        this['push_callback'] = pushCallback;
    }
    public get pushCallback(): AppCallbackUrl | undefined {
        return this['push_callback'];
    }
    public withRecordCallback(recordCallback: AppCallbackUrl): AppCallbacks {
        this['record_callback'] = recordCallback;
        return this;
    }
    public set recordCallback(recordCallback: AppCallbackUrl  | undefined) {
        this['record_callback'] = recordCallback;
    }
    public get recordCallback(): AppCallbackUrl | undefined {
        return this['record_callback'];
    }
}