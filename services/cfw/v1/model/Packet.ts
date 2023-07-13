

export class Packet {
    private 'hex_index'?: string | undefined;
    private 'utf8_string'?: string | undefined;
    public hexs?: Array<string>;
    public constructor() { 
    }
    public withHexIndex(hexIndex: string): Packet {
        this['hex_index'] = hexIndex;
        return this;
    }
    public set hexIndex(hexIndex: string | undefined) {
        this['hex_index'] = hexIndex;
    }
    public get hexIndex() {
        return this['hex_index'];
    }
    public withUtf8String(utf8String: string): Packet {
        this['utf8_string'] = utf8String;
        return this;
    }
    public set utf8String(utf8String: string | undefined) {
        this['utf8_string'] = utf8String;
    }
    public get utf8String() {
        return this['utf8_string'];
    }
    public withHexs(hexs: Array<string>): Packet {
        this['hexs'] = hexs;
        return this;
    }
}