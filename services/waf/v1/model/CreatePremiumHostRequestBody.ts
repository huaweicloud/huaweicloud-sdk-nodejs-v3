import { BlockPage } from './BlockPage';
import { PremiumWafServer } from './PremiumWafServer';


export class CreatePremiumHostRequestBody {
    public certificateid?: string;
    public certificatename?: string;
    public hostname?: string;
    public proxy?: boolean;
    public policyid?: string;
    public server?: Array<PremiumWafServer>;
    private 'block_page'?: BlockPage;
    private 'forward_header_map'?: { [key: string]: string; };
    public mode?: string;
    private 'loadbalancer_id'?: string;
    private 'listener_id'?: string;
    private 'protocol_port'?: number;
    public description?: string;
    private 'web_tag'?: string;
    public constructor(hostname?: string, proxy?: boolean) { 
        this['hostname'] = hostname;
        this['proxy'] = proxy;
    }
    public withCertificateid(certificateid: string): CreatePremiumHostRequestBody {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): CreatePremiumHostRequestBody {
        this['certificatename'] = certificatename;
        return this;
    }
    public withHostname(hostname: string): CreatePremiumHostRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withProxy(proxy: boolean): CreatePremiumHostRequestBody {
        this['proxy'] = proxy;
        return this;
    }
    public withPolicyid(policyid: string): CreatePremiumHostRequestBody {
        this['policyid'] = policyid;
        return this;
    }
    public withServer(server: Array<PremiumWafServer>): CreatePremiumHostRequestBody {
        this['server'] = server;
        return this;
    }
    public withBlockPage(blockPage: BlockPage): CreatePremiumHostRequestBody {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): CreatePremiumHostRequestBody {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; }  | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap(): { [key: string]: string; } | undefined {
        return this['forward_header_map'];
    }
    public withMode(mode: string): CreatePremiumHostRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): CreatePremiumHostRequestBody {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): CreatePremiumHostRequestBody {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withProtocolPort(protocolPort: number): CreatePremiumHostRequestBody {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withDescription(description: string): CreatePremiumHostRequestBody {
        this['description'] = description;
        return this;
    }
    public withWebTag(webTag: string): CreatePremiumHostRequestBody {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
}