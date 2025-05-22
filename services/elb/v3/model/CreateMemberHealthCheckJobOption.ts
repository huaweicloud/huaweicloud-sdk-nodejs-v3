

export class CreateMemberHealthCheckJobOption {
    private 'listener_id'?: string;
    public subject?: string;
    public constructor(listenerId?: string, subject?: string) { 
        this['listener_id'] = listenerId;
        this['subject'] = subject;
    }
    public withListenerId(listenerId: string): CreateMemberHealthCheckJobOption {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withSubject(subject: string): CreateMemberHealthCheckJobOption {
        this['subject'] = subject;
        return this;
    }
}