

export class Quic {
    public status?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): Quic {
        this['status'] = status;
        return this;
    }
}