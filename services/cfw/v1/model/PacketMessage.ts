

export class PacketMessage {
    private 'hex_index'?: string;
    public hexs?: Array<string>;
    private 'utf8_String'?: string;
    public constructor() { 
    }
    public withHexIndex(hexIndex: string): PacketMessage {
        this['hex_index'] = hexIndex;
        return this;
    }
    public set hexIndex(hexIndex: string  | undefined) {
        this['hex_index'] = hexIndex;
    }
    public get hexIndex(): string | undefined {
        return this['hex_index'];
    }
    public withHexs(hexs: Array<string>): PacketMessage {
        this['hexs'] = hexs;
        return this;
    }
    public withUtf8String(utf8String: string): PacketMessage {
        this['utf8_String'] = utf8String;
        return this;
    }
    public set utf8String(utf8String: string  | undefined) {
        this['utf8_String'] = utf8String;
    }
    public get utf8String(): string | undefined {
        return this['utf8_String'];
    }
}