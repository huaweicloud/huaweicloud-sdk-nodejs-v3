import { OriginHostBody } from './OriginHostBody';


export class OriginHostRequest {
    private 'origin_host': OriginHostBody | undefined;
    public constructor(originHost?: any) { 
        this['origin_host'] = originHost;
    }
    public withOriginHost(originHost: OriginHostBody): OriginHostRequest {
        this['origin_host'] = originHost;
        return this;
    }
    public set originHost(originHost: OriginHostBody | undefined) {
        this['origin_host'] = originHost;
    }
    public get originHost() {
        return this['origin_host'];
    }
}