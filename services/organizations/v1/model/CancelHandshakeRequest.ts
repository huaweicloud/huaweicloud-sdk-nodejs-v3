

export class CancelHandshakeRequest {
    private 'handshake_id'?: string;
    public constructor(handshakeId?: string) { 
        this['handshake_id'] = handshakeId;
    }
    public withHandshakeId(handshakeId: string): CancelHandshakeRequest {
        this['handshake_id'] = handshakeId;
        return this;
    }
    public set handshakeId(handshakeId: string  | undefined) {
        this['handshake_id'] = handshakeId;
    }
    public get handshakeId(): string | undefined {
        return this['handshake_id'];
    }
}