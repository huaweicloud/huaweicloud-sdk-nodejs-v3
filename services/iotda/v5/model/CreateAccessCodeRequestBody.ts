

export class CreateAccessCodeRequestBody {
    public type?: string;
    private 'force_disconnect'?: boolean;
    public constructor() { 
    }
    public withType(type: string): CreateAccessCodeRequestBody {
        this['type'] = type;
        return this;
    }
    public withForceDisconnect(forceDisconnect: boolean): CreateAccessCodeRequestBody {
        this['force_disconnect'] = forceDisconnect;
        return this;
    }
    public set forceDisconnect(forceDisconnect: boolean  | undefined) {
        this['force_disconnect'] = forceDisconnect;
    }
    public get forceDisconnect(): boolean | undefined {
        return this['force_disconnect'];
    }
}