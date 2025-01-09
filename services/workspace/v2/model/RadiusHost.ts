

export class RadiusHost {
    public name?: string;
    private 'radius_ip'?: string;
    private 'auth_port'?: number;
    private 'accept_port'?: number;
    private 'nas_id'?: string;
    public constructor() { 
    }
    public withName(name: string): RadiusHost {
        this['name'] = name;
        return this;
    }
    public withRadiusIp(radiusIp: string): RadiusHost {
        this['radius_ip'] = radiusIp;
        return this;
    }
    public set radiusIp(radiusIp: string  | undefined) {
        this['radius_ip'] = radiusIp;
    }
    public get radiusIp(): string | undefined {
        return this['radius_ip'];
    }
    public withAuthPort(authPort: number): RadiusHost {
        this['auth_port'] = authPort;
        return this;
    }
    public set authPort(authPort: number  | undefined) {
        this['auth_port'] = authPort;
    }
    public get authPort(): number | undefined {
        return this['auth_port'];
    }
    public withAcceptPort(acceptPort: number): RadiusHost {
        this['accept_port'] = acceptPort;
        return this;
    }
    public set acceptPort(acceptPort: number  | undefined) {
        this['accept_port'] = acceptPort;
    }
    public get acceptPort(): number | undefined {
        return this['accept_port'];
    }
    public withNasId(nasId: string): RadiusHost {
        this['nas_id'] = nasId;
        return this;
    }
    public set nasId(nasId: string  | undefined) {
        this['nas_id'] = nasId;
    }
    public get nasId(): string | undefined {
        return this['nas_id'];
    }
}