

export class CreateListenerQuicConfigOption {
    private 'quic_listener_id': string | undefined;
    private 'enable_quic_upgrade'?: boolean | undefined;
    public constructor(quicListenerId?: any) { 
        this['quic_listener_id'] = quicListenerId;
    }
    public withQuicListenerId(quicListenerId: string): CreateListenerQuicConfigOption {
        this['quic_listener_id'] = quicListenerId;
        return this;
    }
    public set quicListenerId(quicListenerId: string | undefined) {
        this['quic_listener_id'] = quicListenerId;
    }
    public get quicListenerId() {
        return this['quic_listener_id'];
    }
    public withEnableQuicUpgrade(enableQuicUpgrade: boolean): CreateListenerQuicConfigOption {
        this['enable_quic_upgrade'] = enableQuicUpgrade;
        return this;
    }
    public set enableQuicUpgrade(enableQuicUpgrade: boolean | undefined) {
        this['enable_quic_upgrade'] = enableQuicUpgrade;
    }
    public get enableQuicUpgrade() {
        return this['enable_quic_upgrade'];
    }
}