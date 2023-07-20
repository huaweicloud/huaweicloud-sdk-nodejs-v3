

export class ListenerQuicConfig {
    private 'quic_listener_id'?: string;
    private 'enable_quic_upgrade'?: boolean;
    public constructor() { 
    }
    public withQuicListenerId(quicListenerId: string): ListenerQuicConfig {
        this['quic_listener_id'] = quicListenerId;
        return this;
    }
    public set quicListenerId(quicListenerId: string  | undefined) {
        this['quic_listener_id'] = quicListenerId;
    }
    public get quicListenerId(): string | undefined {
        return this['quic_listener_id'];
    }
    public withEnableQuicUpgrade(enableQuicUpgrade: boolean): ListenerQuicConfig {
        this['enable_quic_upgrade'] = enableQuicUpgrade;
        return this;
    }
    public set enableQuicUpgrade(enableQuicUpgrade: boolean  | undefined) {
        this['enable_quic_upgrade'] = enableQuicUpgrade;
    }
    public get enableQuicUpgrade(): boolean | undefined {
        return this['enable_quic_upgrade'];
    }
}