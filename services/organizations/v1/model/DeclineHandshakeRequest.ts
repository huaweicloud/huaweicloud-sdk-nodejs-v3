

export class DeclineHandshakeRequest {
    private 'X-Security-Token'?: string;
    private 'handshake_id'?: string;
    public constructor(handshakeId?: string) { 
        this['handshake_id'] = handshakeId;
    }
    public withXSecurityToken(xSecurityToken: string): DeclineHandshakeRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withHandshakeId(handshakeId: string): DeclineHandshakeRequest {
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