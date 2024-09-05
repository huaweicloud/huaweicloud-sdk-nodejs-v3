

export class CreateAuthRandomRequest {
    private 'conf_id'?: string;
    private 'guest_waiting'?: number;
    private 'X-Password'?: string;
    public constructor(confId?: string) { 
        this['conf_id'] = confId;
    }
    public withConfId(confId: string): CreateAuthRandomRequest {
        this['conf_id'] = confId;
        return this;
    }
    public set confId(confId: string  | undefined) {
        this['conf_id'] = confId;
    }
    public get confId(): string | undefined {
        return this['conf_id'];
    }
    public withGuestWaiting(guestWaiting: number): CreateAuthRandomRequest {
        this['guest_waiting'] = guestWaiting;
        return this;
    }
    public set guestWaiting(guestWaiting: number  | undefined) {
        this['guest_waiting'] = guestWaiting;
    }
    public get guestWaiting(): number | undefined {
        return this['guest_waiting'];
    }
    public withXPassword(xPassword: string): CreateAuthRandomRequest {
        this['X-Password'] = xPassword;
        return this;
    }
    public set xPassword(xPassword: string  | undefined) {
        this['X-Password'] = xPassword;
    }
    public get xPassword(): string | undefined {
        return this['X-Password'];
    }
}