

export class DnsServersResponseDTO {
    public id?: number;
    private 'is_applied'?: number | undefined;
    private 'is_customized'?: number | undefined;
    private 'server_ip'?: string | undefined;
    public constructor() { 
    }
    public withId(id: number): DnsServersResponseDTO {
        this['id'] = id;
        return this;
    }
    public withIsApplied(isApplied: number): DnsServersResponseDTO {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: number | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied() {
        return this['is_applied'];
    }
    public withIsCustomized(isCustomized: number): DnsServersResponseDTO {
        this['is_customized'] = isCustomized;
        return this;
    }
    public set isCustomized(isCustomized: number | undefined) {
        this['is_customized'] = isCustomized;
    }
    public get isCustomized() {
        return this['is_customized'];
    }
    public withServerIp(serverIp: string): DnsServersResponseDTO {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp() {
        return this['server_ip'];
    }
}