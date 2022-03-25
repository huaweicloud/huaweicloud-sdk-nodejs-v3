

export class OnError {
    public error?: string;
    public transition?: string;
    private 'retry_ref'?: string | undefined;
    public constructor() { 
    }
    public withError(error: string): OnError {
        this['error'] = error;
        return this;
    }
    public withTransition(transition: string): OnError {
        this['transition'] = transition;
        return this;
    }
    public withRetryRef(retryRef: string): OnError {
        this['retry_ref'] = retryRef;
        return this;
    }
    public set retryRef(retryRef: string | undefined) {
        this['retry_ref'] = retryRef;
    }
    public get retryRef() {
        return this['retry_ref'];
    }
}